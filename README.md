Edyt Software Engineer Coding Exercise
=======================================

Do not spend more than four hours on this.  If you do not finish, submit what you have with a description of what you would do to finish.

Your submission will be evaluated according to correctness, simplicity and elegance.

Although you can use whatever tools, languages, and frameworks you like, we highly recommend Python and/or JavaScript.

Objective
---------

Write a web server that listens on port 8080 and shows a web page that allows a user to view the current weather at some city.  For example, it could serve up an introductory page that allows the user to type in a short text string (for example "San Francisco, CA").  The user can then initiate the looking up of the weather (say, by pressing a "current weather" button).  Your program must show the user the current weather (for example, "Currently, the sky is clear, temperature is 59F").  The particulars of the interaction, and how the results are displayed to the user, are not important.  Also, accurate geocoding is not the point of this exercise: anything simple is acceptable.

How to Submit
-------------

You must return to us the completed assignment as a git repo.  The repo must be self-contained: it must contain everything required to run your code (compilers, libraries, frameworks).  You can assume the following:

* Your submission will be run on CentOS 6.5 or Ubuntu 14 (either is fine, it doesn't have to work on both);
* Python 2.7.6 is pre-installed;
* [Pip 1.5.x](https://pypi.python.org/pypi/pip/1.5.6) is pre-installed;
* [Node 0.10.x](http://nodejs.org/download/) is pre-installed; and
* NPM 1.4.x is pre-installed.

The repo must contain a top-level script called "run" that does everything required to install, setup and run your assigment.

The resulting repo must be emailed to [shandley@edyt.com](mailto:shandley@edyt.com).  You have two choices: One, you can package the repo up as a .tgz or .zip file and attach this to the email.  Or, two, you can put it on GitHub, make sure the permissions are correct, and email the link instead.

We will evaluate your submission as follows:

1. We will start with a fresh CentOS 6.5 or Ubuntu 14 linux distribution with python 2.7.6 and node 0.10.x pre-installed.

2. We will unpackage your repo and execute "run" in the root of your repo, either:

```bash
    cd ~
    tar xfz <your-submission>.tgz
    cd <your-submission>
    ./run
```

or:

```bash
    cd ~
    git clone <your-github-repo-URL>
    cd <your-submission>
    ./run
```

We will then navigate a web server to [http://localhost:8080](http://localhost:8080) to evaluate your program.

