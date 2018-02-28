// this is formatted to echo the structure of the Bluemix credentials
    module.exports = {
        VCAP_SERVICES: JSON.stringify({
            conversation: [{
                credentials: {
                    url: "https://gateway.watsonplatform.net/conversation/api",
                    username: "e1c1ce8e-25de-4ea1-8c08-6e222b5ea18e",
                    password: "gt3hjxyi8VZh"
                }
            }],
            discovery: [{
              credentials: {
                url: "https://gateway.watsonplatform.net/discovery/api",
                //username: "23996ce0-a0a5-4c66-9b59-963d9156ede6",
                //password: "EDwBQF5fUBEO"
                password: "pcfi1VJ7zkk6",
                username: "5b6c9421-f2ee-457c-a585-fa85e3fc8f38"
              }
            }]
        }),
        // conversation creds
        workspace_id: "dccf4978-77c8-4ad9-a7d6-c326eb3e73c6",
        conversation_version: "2018-02-16",
        // disco creds
        environment_id: "923202c1-07eb-4356-bcd2-2f5910543d7f",
        collection_id: "ba4ce7d7-ec34-46e0-a1a9-cb2252b0c829",
        discovery_version: "2017-11-07"
    };
