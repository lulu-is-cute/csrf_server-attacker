# CSRF Vulnerable server attacking demo

This web app is an attacker site demo to show developers to always use CSRF protection, developers will run a node app from [this repo](https://github.com/lulu-is-cute/Basic-CSRF-logic) which will run a website and then run this repo in node on a different origin (hosted on heroku, glitch, repl and etc) from which the website and then a CSRF attack will be demonstraited by editing the notepad data of a user from them going onto a third party site (this)

**WARNING:** The main notepad website and this third party attacker website cannot be run on the same host because that will disable SOP

When on a different host, download this repository from github and then set the folder as the current directory:
```sh
git clone https://github.com/lulu-is-cute/csrf_server-attacker folder_name
# set folder as current directory
cd folder_name
```

When that is completed, run the host using node:
```sh
node app.js
```

```
Now when you have both hosts running (main website and third party attacking website) here is what you do:
```
First visit the main notepad website and create some user data, create an account & write some stuff to your notepad.

Then visit this host, you will see how the CSRF attack removes all your data from the notepad froma different origin!
```

I hope the series of this repositories taught you about CSRF and a little bit of web security.

# Secure your apps
