const NanoClient = require('../../dist').NanoClient;

/* These tests are ran on my local machine; if integrated into a pipeline the following tests will fail:
    - local RPC node
 */
describe('Http Requests', function () {
    it('should work with local RPC node', (done) => {
        const client = new NanoClient({
            url: 'http://[::1]:7072', // Banano Node
        });
        client
            .available_supply()
            .then((response) => {
                expect(response.available).toBeTruthy();
                done();
            })
            .catch((err) => done(err));
    });
    it('should work with nano-rpc-proxy server', (done) => {
        const client = new NanoClient({
            url: 'http://108.39.249.5:1120/banano-rpc', // Banano Node
        });
        client
            .available_supply()
            .then((response) => {
                expect(response.available).toBeTruthy();
                done();
            })
            .catch((err) => done(err));
    });
    it('should work with My Nano Ninja', (done) => {
        const client = new NanoClient({
            url: 'https://mynano.ninja/api/node',
        });
        client
            .available_supply()
            .then((response) => {
                expect(response.available).toBeTruthy();
                done();
            })
            .catch((err) => done(err));
    });
});
