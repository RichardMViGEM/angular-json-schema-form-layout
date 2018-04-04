import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm = null;

  title = 'app';

  yourOnChangesFn(event) {
    this.myForm = event;
    console.log('@INIT: yourOnChangesFn');
  }

  OnSubmit(event) {
    console.log('@INIT: OnSubmit');
  }

  yourOnSubmitFn(event) {
    console.log('@INIT: yourOnSubmitFn');
  }

  ResetFn() {
    console.log('@INIT: ResetFn');
  }



  // @FIXME: retrieve from server
  myJsonSchema = {
      "type": "object",
      "title": "Comment",
      "properties": {
        "name": {
          "title": "Name",
          "type": "string"
        },
        "email": {
          "title": "Email",
          "type": "string",
          "pattern": "^\\S+@\\S+$",
          "description": "Email will be used for evil."
        },
        "comment": {
          "title": "Comment",
          "type": "string",
          "maxLength": 20,
          "validationMessage": "Don't be greedy!"
        },
        "inc_id_event1_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event2_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event3_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event4_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event5_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event6_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event7_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event8_checkbox": {
          "title": " ",
          "type": "boolean"
        },
        "inc_id_event9_checkbox": {
          "title": " ",
          "type": "boolean"
        }
      },

    };

    
    myLayout = [
      {
        "type": "section",
        "htmlClass": "container",
        "items": [
          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event1</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 1</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event1_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event2</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 2</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event2_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event3</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 3</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event3_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event4</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 4</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event4_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event5</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 5</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event5_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event6</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 6</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event6_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event7</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 7</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event7_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event8</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 8</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event8_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <em>inc_id_event9</em>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-6",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <span>Eindeutiger Marker/Trigger-Nummer erh\&ouml;hen bei Anwenderereignis 9</span>
                    `
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  "inc_id_event9_checkbox"
                ]
              },
              {
                "type": "section",
                "htmlClass": "col-sm-2",
                "items": [
                  {
                    "type": "help",
                    "helpvalue":`
                      <i class="fa fa-circle-o" title="Änderungen erfordern Neustart der Aufzeichnung"></i>
                      <i class="fa fa-refresh" title="Änderungen erfordern Neustart des Systems"></i>
                    `
                  }
                ]
              }
            ]
          },

          {
            "type": "actions",
            "items": [
              { "type": "submit", "style": "btn-default",   "title": "Submit" }
            ]
          }

        ]
      }
    ]

}
