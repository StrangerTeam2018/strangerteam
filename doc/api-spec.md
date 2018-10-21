# API Spec

## API Calls

/api/alerts/LATITUDE/LONGITUDE

  {
    type: ALERT_TYPE,
    headline: EVENT_HEADLINE
    level: ALERT_LEVEL,
    when : {
      activated: WHEN_ACTIVATED,
      expires:   WHEN_EXPIRES
    },
    area : COORDINATES,
    more_lines : ARRAY_OF_STRINGS
  }


## Type Definitions

- **ALERT_TYPE** (string):

  Alert event type, one of:

    - "flood"
    - "storm"
    - "rain"
    - "coldwave"
    - "heatwave"
    - "snow"
    - "fog"
    - "wind"
    - "dust"

- **ALERT_LEVEL** (string):

  Severity level of this event:

    - "low": low alert level
    - "medium": medium alert level
    - "high": high alert level

- **HEADLINE** (string):

  Brief description of what happened

- **WHEN_ACTIVATED** (iso datetime):

  Date-time when this alert was activated

- **WHEN_EXPIRES** (iso datetime):

  Date-time when this alert was activated

- **MORE_LINES** (list of strings):

  Array of strings with more information to show.
