'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap'])
    .controller('MyCtrl1', ['$scope', function ($scope) {

    }])
    .controller('JsonBuilder', ['$scope', function ($scope) {
        $scope.master = {};

        $scope.update = function (composition) {
            $scope.master = angular.copy(composition);
        };

        $scope.reset = function () {
            $scope.composition = angular.copy($scope.master);
        };

        $scope.addSection = function () {
            $scope.composition.content = $scope.composition.content || [];
            $scope.composition.content.push({});
        };

        $scope.addStanza = function (section) {
            section.stanzas = section.stanzas || [];
            section.stanzas.push({
                lines: [
                    {
                        line: ""
                    },
                    {
                        line: ""
                    }
                ]
            });
        };

        $scope.deleteStanza = function (section, stanzaKey) {
            section.stanzas.splice(stanzaKey, 1);
        };
        $scope.deleteLine = function (stanza, lineKey) {
            stanza.lines.splice(lineKey, 1);
        };

        $scope.addLine = function (stanza) {
            stanza.lines.push({
                line: ""
            });
        };

        $scope.addKey = function (object, key) {
            object[key] = "";
        };

        $scope.addObject = function (object, key) {
            object[key] = {};
        };

        $scope.deleteKey = function (object, key) {
            delete object[key];
        };

        $scope.deleteIndex = function (arr, index) {
            arr.splice(index, 1);
        };
        $scope.reset();
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
                                    "meaning": "This has no derivation but just taatparyam of this line"
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

