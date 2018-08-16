Ext.define('RESTQuestion', {

    constructor: function() {
        Ext.Ajax.cors = true;
        Ext.Ajax.setDefaultHeaders({
            'Content-Type': 'application/json',
            'tenantId': 1,
            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1ERTNNRFZHTURWR05rTTFNRUpDT1RrMVJFTTVOREk1TnpRM1EwSkRNRFV4TWpCQ1FqY3pOUSJ9.eyJodHRwOi8vaHlkcmEuY2xvdWQvZW1haWwiOiJzdXBlcmFkbWluQGV0YXNrLml0IiwiaHR0cDovL2h5ZHJhLmNsb3VkL2lkIjoiYXV0aDB8MSIsImh0dHA6Ly9oeWRyYS5jbG91ZC9wc2FfaWQiOiIxIiwiaHR0cDovL2h5ZHJhLmNsb3VkL25hbWUiOiJTdXBlciBBZG1pbiIsImh0dHA6Ly9oeWRyYS5jbG91ZC9yb2xlcyI6W3siY29tcElkIjoxLCJyb2xlcyI6WyJDT05UUklCVVRPUiJdfSx7ImNvbXBJZCI6Miwicm9sZXMiOlsiQ09OVFJJQlVUT1IiXX1dLCJpc3MiOiJodHRwczovL2h5ZHJhYXV0aC1kZXYuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDEiLCJhdWQiOlsiaHR0cHM6Ly9xYS5oeWRyYS5jbG91ZCIsImh0dHBzOi8vaHlkcmFhdXRoLWRldi5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTM0NDI3MjM2LCJleHAiOjE1MzQ0MzQ0MzYsImF6cCI6Im1LdVc0Nk9BRUZGUzJyS2ZUSjV2WGJJd3E5Ukx0T3o1Iiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSJ9.L0PQmY-FpeVjOXkkq2IsSK8fsnb3M98_VVZN9vHXxRQW6OSP8srknt6-Rz1X2q2QuQUpv9OVA-mTu_3btcybWd0SYIOs25O9d2SNcjRjgNykudNOzmW9NF3pE2C_QNrHR4y3UJ2LnyF2UqqbMn90-ziJkP8XnxTvrNt0aa-zR01ikLZ8Z-_4FTKEb3KD0aPMQf5A76e_Q7hGYhNdJTg_q8BCq7Wuh5KaOejJgwi6s6n9EdvZlSCN480QH5ppUhWRzO_AGIiq1-u0Yfcv11hd2yjGdRNO9n_HJzWRKyxoL9JVOyQ9c70-XfN4nvKb0jJvfMERWDC7TlLDwoGXP5Q-YA'
        });
    },

    getQuestions: function () {
        return new Ext.Promise(function (resolve, reject) {
            Ext.Ajax.request({
                url: 'http://qa.local.hydra.cloud:8085/qa/questions/search/',
                method: 'GE
                useDefaultXhrHeader: false,T',
                withCredentials: true,
                success : function(response, opts) {
                    resolve(response);
                },
                failure : function(response, opts) {
                    reject(response.status);
                }
            });
        });
    }

});
