// import sinon from 'sinon';
// import { expect } from 'chai';
// import api from './index';
//
// beforeEach((done) => {
//   sinon.stub(window, 'fetch');
//   done();
// });
//
// afterEach((done) => {
//   window.fetch.restore();
//   done();
// });
//
//
//
// it('formats the response correctly', (done) => {
//   const stubbedResponseBody = JSON.stringify([
//     { firstName: 'Bob' }
//   ]);
//   const stubbedResponseHTTP = {
//     status: 200,
//     headers: {
//       'Content-type': 'application/json'
//     }
//   };
//   const stubbedResponse = new window.Response(stubbedResponseBody, stubbedResponseHTTP);
//   window.fetch.returns(Promise.resolve(stubbedResponse));
//
//   api.getVisits()
//     .then((visits) => {
//       console.log(visits);
//       expect(visits.length).to.equal(1);
//       done();
//     })
//     .catch(err => console.log(err));
// });
