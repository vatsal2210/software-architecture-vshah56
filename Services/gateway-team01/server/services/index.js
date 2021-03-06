// The content of this file was generated by IBM Cloud
// No not modify it as it might get overridden

var IBMCloudEnv = require('ibm-cloud-env');
var serviceManager = require('./service-manager');
IBMCloudEnv.init();
const fetch = require('node-fetch');
const axios = require('axios');

module.exports = function (app) {

    const services = ["skiResort", "restaurants", "museums", "companies"];
    const registryURL = "https://ypgateway.mybluemix.net/getMicroServicesList";

    const skiResortServiceURL = 'https://ypgateway.mybluemix.net:443/ski/resort/search';
    const restaurantsServiceURL = '';
    const museumsServiceURL = '';
    const companies = '';
    var serviceList = [];
    // var serviceList = [{
    //     "skiResort": 1,
    //     "restaurants": 1,
    //     "museums": 1,
    //     "fortuneCompanies": 1
    // }];

    app.get('/testing', (req, res) => {
        res.send('Gateway working');
    });

    /* Check service status */
    var checkServicesStatus = function () {
        console.log('checkServicesStatus called');
        axios.get(registryURL)
            .then(function (response) {
                // handle success
                console.log('checkServicesStatus res', response);
                return res.send(response);
            })
            .catch(function (error) {
                // handle error
                console.log('checkServicesStatus error', error);
                return res.send({
                    code: 500,
                    message: 'Something went wrong. Try again!'
                });
            })
    }

    /* Dynamic dropdown list */
    app.get('/list', (req, res) => {
        console.log('Get list of APIs for a dropdown');
        // checkServicesStatus();
        axios.get(registryURL)
            .then(function (response) {
                // handle success
                console.log('checkServicesStatus res', response);
                return res.send(JSON.stringify(response));
            })
            .catch(function (error) {
                // handle error
                console.log('checkServicesStatus error', error);
                return res.send({
                    code: 500,
                    message: 'Something went wrong. Try again!'
                });
            })
    });

    /* Search details from selected services */
    app.post('/search', (req, res) => {
        const serviceName = req.body.serviceName;
        const searchParam = req.body.searchParam;

        if (serviceName == '' || serviceName == undefined) {
            res.send({
                code: 200,
                message: 'Please select service Name'
            });
        } else if (!services.includes(serviceName)) {
            res.send({
                code: 200,
                message: 'Please select valid service'
            });
        } else if (searchParam == "" || searchParam == undefined) {
            res.send({
                code: 200,
                message: 'Enter valid search name'
            });
        } else {
            // Found service name
            var url;
            if (serviceName.includes("skiResort")) {
                url = skiResortServiceURL;
            }

            if (serviceName.includes("restaurants")) {
                url = restaurantsServiceURL;
            }

            if (serviceName.includes("museums")) {
                url = museumsServiceURL;
            }

            if (serviceName.includes("fortuneCompanies")) {
                url = fortuneCompanies;
            }

            console.log('url ', url);
            axios.post(url, {
                    query: searchParam
                })
                .then(function (response) {
                    console.log('/search', response);
                    return res.send(response);
                })
                .catch(function (error) {
                    console.log('/search error', error);
                    return res.send(error);
                });
        }
    });

    // checkServicesStatus();

    // /* Check status of services */
    // setInterval(function () {
    //     checkServicesStatus();
    // }, 10000);

};