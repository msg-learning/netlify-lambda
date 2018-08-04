import { createHash } from 'crypto';

export function handler ( event, context, callback ) {

    let output = '' + Date.now() + '' + Math.random();

    for ( let i = 0; i < 100; i++ ) {

        let hash = createHash( 'sha1' );
        hash.update( output );
        output = hash.digest( 'base64' );

    }

    callback( null, {
        statusCode: 200,
        body: JSON.stringify( {
            hash: output
        } )
    } );

}
