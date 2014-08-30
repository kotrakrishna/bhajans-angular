'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap'])
    .controller('MyCtrl1', ['$scope', function ($scope) {

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }])
    .controller('Stotras', function ($scope) {
        $scope.isCollapsed = true;
        $scope.content =
        {
            "deity": "Datta",
            "genre": "Bhajana",
            "language": "Kannada",
            "id": "GUR-STO-KAN-SAN-KVK-1001",
            "title": "ಸದ್ಗುರು ಸ್ತವಃ",
            "scriptLanguage": "Sanskrit",
            "author": "KVK",
            "content": [
                {
                    "section": "Pallavi",
                    "stanzas": [
                        {
                            "stanza": [
                                {
                                    "line": "అత్రినందన దత్త మూరుతి",
                                    "derivation": {
                                        "అత్రినందన": "అత్రి నందన",
                                        "దత్త": "దత్త",
                                        "మూరుతి": "మూరుతి"
                                    },
                                    "meaning": "Meaning for this line"
                                },
                                {
                                    "line": "సచ్చిదానంద దత్త మూరుతి",
                                    "meaning": "This has no derivation but just meaning of this line"
                                }
                            ]
                        }
                    ]
                },
                {
                    "section": "Charanam",
                    "stanzas": [
                        {
                            "stanza": [
                                {
                                    "line": "అమరవర్గకె అభయసారధి"
                                },
                                {
                                    "line": "మూలసద్గురు పీఠ నెలసిద"
                                },
                                {
                                    "line": "అనసూయా సుత అత్రి మునిపతి"
                                },
                                {
                                    "line": "అత్రినందన దత్త మూరుతి"
                                }
                            ],
                            "derivation": {
                                "at stanza": "level",
                                "if we": "dont have it at line level"
                            },
                            "meaning": "Meaning for this stanza if we dont want to have meaning at each line"
                        },
                        {
                            "stanza": [
                                {
                                    "line": "పిఠాపురదొళు మయ్యతోర్దవ"
                                },
                                {
                                    "line": "కురవపురదొళు నెలసి నిందిహ"
                                },
                                {
                                    "line": "యోగిరాజ శ్రీపాద గురుపతి"
                                },
                                {
                                    "line": "అత్రినందన దత్త మూరుతి"
                                }
                            ]
                        }
                    ]
                }
            ]
        };

    });

