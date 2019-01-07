# MJML4-Lambda
    
A simple lambda that accepts mjml + options and returns the generated markup



## Example:
```
[POST]

{
    "body": {
        "mjml":"<mj-text>hello</mj-text>",
        "options":""
    }
}
```
```
[RESPONSE - Success]

{
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json"
  },
  "body": "\n    <!doctype html>\n    <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n      <head>\n        <title>\n          \n        </title>\n        <!--[if !mso]><!-- -->\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n        <!--<![endif]-->\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <style type=\"text/css\">\n          #outlook a { padding:0; }\n          .ReadMsgBody { width:100%; }\n          .ExternalClass { width:100%; }\n          .ExternalClass * { line-height:100%; }\n          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }\n          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }\n          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }\n          p { display:block;margin:13px 0; }\n        </style>\n        <!--[if !mso]><!-->\n        <style type=\"text/css\">\n          @media only screen and (max-width:480px) {\n            @-ms-viewport { width:320px; }\n            @viewport { width:320px; }\n          }\n        </style>\n        <!--<![endif]-->\n        <!--[if mso]>\n        <xml>\n        <o:OfficeDocumentSettings>\n          <o:AllowPNG/>\n          <o:PixelsPerInch>96</o:PixelsPerInch>\n        </o:OfficeDocumentSettings>\n        </xml>\n        <![endif]-->\n        <!--[if lte mso 11]>\n        <style type=\"text/css\">\n          .outlook-group-fix { width:100% !important; }\n        </style>\n        <![endif]-->\n        \n        \n        <style type=\"text/css\">\n        \n        \n        </style>\n        \n        \n      </head>\n      <body>\n        \n        \n      </body>\n    </html>\n  "
}


[RESPONSE - With Errors]
{
  "errorMessage": "[{\"line\":1,\"message\":\"Element mjml-text doesn't exist or is not registered\",\"tagName\":\"mjml-text\",\"formattedMessage\":\"Line 1 of /var/task (mjml-text) — Element mjml-text doesn't exist or is not registered\"}]"
}
```

