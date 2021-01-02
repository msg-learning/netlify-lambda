import { createHash } from 'crypto';

export function handler ( event, context, callback ) {

    logEvent( event );

    const value = event.queryStringParameters.value;
    const base = '' + Date.now() + '' + Math.random();

    let output;

    if ( value ) {

        output = hash( value );

    } else {

        for ( let i = 0; i < 100; i++ ) {

            output = hash( base );

        }

    }

    callback( null, {
        statusCode: 200,
        body: JSON.stringify( {
            hash: output
        } )
    } );

}

function hash ( value ) {

    let sha1 = createHash( 'sha1' );
    sha1.update( value );
    return sha1.digest( 'base64' );

}

const logEvent = event => {
    const ip = event.headers[ 'client-ip' ];
    const country = event.headers[ 'x-country' ];
    console.info( `Hashing "${ event.queryStringParameters.value }" for ${ ip } (${ country } )` );
};
