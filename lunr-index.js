
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["home.html#home"] = "Home";
index.add({
    url: "home.html#home",
    title: "Home",
    body: "# Home  Welcome to the vagrant-ansible-jenkins documentation!  To get started view the Introduction page,  otherwise, select the specific topic that you require.  Jump right in!   ![github](http://ciembor.github.io/4bit/images/github.png)  [Repository](https://github.com/medullan/vagrant-ansible-jenkins)   ![wiki](http://www.altera.com/common/template/08/icon-wiki.gif)  [Edit On Guthub](https://github.com/medullan/vagrant-ansible-jenkins.wiki.git)   "
});

documentTitles["home.html#useful-links"] = "Useful Links:";
index.add({
    url: "home.html#useful-links",
    title: "Useful Links:",
    body: "### Useful Links: - [Ansible](http://docs.ansible.com/) - [Packer](http://www.packer.io/docs) - [Vagrant](http://docs.vagrantup.com/v2/) - [DropBox Direct Link Creation](http://techapple.net/2014/04/trick-obtain-direct-download-links-dropbox-files-dropbox-direct-link-maker-tool-cloudlinker/)"
});



documentTitles["01-intro.html#introduction"] = "Introduction";
index.add({
    url: "01-intro.html#introduction",
    title: "Introduction",
    body: "# Introduction   This repository was created to provide a new team with a pre configured Jenkins environment with similar slave environments by using Amazon Web Services. Vagrant and packer was used with the help of Ansible for consistent and repeatable environments.  * If interested in pushing to this Repository please see the `Development` section. * If problems occur, Please check the `Known Issues` page first. If there are no resolutions for your problem then feel free to submit an [issue](https://github.com/medullan/vagrant-ansible-jenkins/issues) * Most Instructions and problem resolutions were tested for Mac OS X. Cannot guarantee this process will work on other operating systems "
});



documentTitles["02-requirements-and-features.html#requirements"] = "Requirements";
index.add({
    url: "02-requirements-and-features.html#requirements",
    title: "Requirements",
    body: "# Requirements - `Vagrant - latest` - `Ansible &gt;= v1.7.1` (will most likely get errors if version is lower) - `Packer - latest`  Two vagrant plugins are required. To install these plugins, please run: ```shell vagrant plugin install vagrant-vbguest vagrant plugin install vagrant-aws ```  "
});

documentTitles["02-requirements-and-features.html#features"] = "Features";
index.add({
    url: "02-requirements-and-features.html#features",
    title: "Features",
    body: "# Features - Setup jenkins - Setup jenkins security (github strategy) - Install/Update Plugins - Pre Configured Plugins eg. git, GitHub Webhook, Rally (Some plugins such as rally cannot be fully configured in the playbook due to password encryptions) - Create defined list of jobs from xml - Restarts jenkins if needed after provisioning"
});



documentTitles["03-whats-already-inside.html#whats-already-inside"] = "Whats Already inside";
index.add({
    url: "03-whats-already-inside.html#whats-already-inside",
    title: "Whats Already inside",
    body: "# Whats Already inside  "
});

documentTitles["03-whats-already-inside.html#major-apt-packages"] = "Major Apt Packages";
index.add({
    url: "03-whats-already-inside.html#major-apt-packages",
    title: "Major Apt Packages",
    body: "### Major Apt Packages `jenkins`, `ansible`, `docker`, `jmeter`, `python-setuptools`, `git`, `jre-7`, `jdk-7`, `curl`, `groovy`, `nodejs-legacy`, `npm`   "
});

documentTitles["03-whats-already-inside.html#pip-packages"] = "Pip Packages";
index.add({
    url: "03-whats-already-inside.html#pip-packages",
    title: "Pip Packages",
    body: "### Pip Packages `jenkins-autojobs`, `robotframework-selenium2library`  "
});

documentTitles["03-whats-already-inside.html#npm-global-packages"] = "NPM Global Packages";
index.add({
    url: "03-whats-already-inside.html#npm-global-packages",
    title: "NPM Global Packages",
    body: "### NPM Global Packages `istanbul`, `bower`, `grunt-cli`   To see a full list of apt and pip packages installed, see the following file: https://github.com/medullan/vagrant-ansible-jenkins/blob/master/provisioners/ansible/roles/shared/vars/main.yml"
});



documentTitles["031-checkurl-groovy-script.html#checkurl-groovy-script"] = "CheckUrl Groovy Script";
index.add({
    url: "031-checkurl-groovy-script.html#checkurl-groovy-script",
    title: "CheckUrl Groovy Script",
    body: "## CheckUrl Groovy Script  "
});

documentTitles["031-checkurl-groovy-script.html#what-is-checkurl"] = "What is CheckUrl?";
index.add({
    url: "031-checkurl-groovy-script.html#what-is-checkurl",
    title: "What is CheckUrl?",
    body: "### What is CheckUrl? CheckUrl is a script created to ping a website to check if it is giving a `200` response in a favorable response time.  "
});

documentTitles["031-checkurl-groovy-script.html#use-case"] = "Use Case";
index.add({
    url: "031-checkurl-groovy-script.html#use-case",
    title: "Use Case",
    body: "### Use Case The perfect use case for this script is to check until a site comes online after a deploy. If it doesn't get a 200 response after a specified interval, then the deploy can be considered a failure. Works great for deploying a test or production site.  "
});

documentTitles["031-checkurl-groovy-script.html#where-is-it"] = "Where is it?";
index.add({
    url: "031-checkurl-groovy-script.html#where-is-it",
    title: "Where is it?",
    body: "### Where is it? The script is transferred to the ***/var/lib/jenkins/shared_ansible*** location on each machine provisioned. This ensures there is a consistent location on Jenkins Master and all slaves to enable seamless builds across the environment. The script does not run indefinitely; it runs for a specified amount of tries and will exit with a failure or success depending on the `Final Response`.  "
});

documentTitles["031-checkurl-groovy-script.html#how-to-use"] = "How to Use";
index.add({
    url: "031-checkurl-groovy-script.html#how-to-use",
    title: "How to Use",
    body: "### How to Use  ***groovy*** and ***curl*** must be installed to run the script. Luckily these are already installed when provisioning with Ansible.  To get help with figuring out the arguments to pass when running the script, you can use the ***-h*** argument to see instructions.  ```bash $ groovy checkurl.groovy -h  usage: checkurl.groovy -[hmst] [url]  -h,--help                 Show usage information  -m,--max-time &lt;maxTime&gt;   max time in seconds before killing a curl                            command, Default: 20  -s,--sleep &lt;sleep&gt;        time in seconds before next retry, Default: 4  -t,--tries &lt;tries&gt;        number of tries before exit, Default: 3 ```  "
});

documentTitles["031-checkurl-groovy-script.html#example"] = "Example";
index.add({
    url: "031-checkurl-groovy-script.html#example",
    title: "Example",
    body: "### Example The example below pings a site every minute and attempts 12 tries before exiting.  ```bash $ groovy /var/lib/jenkins/shared_ansible/checkurl.groovy -m 30 -s 60 -t 12 http://ec2-54-221-51-114.compute-1.amazonaws.com  Checking 'http://ec2-54-221-51-114.compute-1.amazonaws.com' with:    12 tries    30 seconds timeout per try    60 seconds interval before next try   LETS ROCK! Response is 404: not satisfactory ... executing retry (11 left) elapsed time: 0.359 seconds   Response is 404: not satisfactory ... executing retry (10 left) elapsed time: 1 minutes, 0.480 seconds   Response is 404: not satisfactory ... executing retry (9 left) elapsed time: 2 minutes, 0.512 seconds    (0) Final Response is 200: site is ready! elapsed time: 3 minutes, 4.586 seconds   ```  The ***(0)*** in this line ***(0) Final Response is 200: site is ready!*** is the exit code. - An exit code of ***0*** means success - An exit code of ***1*** means a failure"
});



documentTitles["032-saucelabs-python-script.html#saucelabs-python-script"] = "SauceLabs Python Script";
index.add({
    url: "032-saucelabs-python-script.html#saucelabs-python-script",
    title: "SauceLabs Python Script",
    body: "## SauceLabs Python Script  The `SauceLabs.py` script, discovered in a [blog](http://datakurre.pandala.org/2014/03/cross-browser-selenium-testing-with.html), is used to run robotframework tests on SauceLabs while creating the outputs on the machine that executed the command.  This Requires the following pip packages:  - `robotframework-selenium2library` - `simplejson` - `requests`  "
});

documentTitles["032-saucelabs-python-script.html#where-is-it"] = "Where is it?";
index.add({
    url: "032-saucelabs-python-script.html#where-is-it",
    title: "Where is it?",
    body: "### Where is it?  The script is copied to the ***/usr/local/bin*** directory where it can be referenced by python when a script is run that imports the SauceLabs library"
});



documentTitles["04-how-to-setup.html#how-to-setup"] = "How to Setup";
index.add({
    url: "04-how-to-setup.html#how-to-setup",
    title: "How to Setup",
    body: "# How to Setup There are several steps that are required and some may be optional that will get you going with this repository. The following Pages will give you detailed information on these setup steps."
});



documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#install-plugins"] = "Install Plugins";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#install-plugins",
    title: "Install Plugins",
    body: "## Install Plugins To edit the list of plugins to install when provisioning, look for the following file and edit the plugins section as necessary [provisioners/ansible/roles/shared/vars/main.yml](https://github.com/medullan/vagrant-ansible-jenkins/blob/master/provisioners/ansible/roles/shared/vars/main.yml)  ```yaml plugins: # Jenkins Plugins   - 'ldap'   - 'translation' [...] ```  "
});

documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#create-jobs"] = "Create Jobs";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#create-jobs",
    title: "Create Jobs",
    body: "## Create Jobs To have a job be created by the Ansible Provisioning then a job xml should be placed in the following directory: ***provisioners/ansible/files/jenkins/jobs***  The job created will match the name of the file  eg.  The file: ***provisioners/ansible/files/jenkins/jobs/ExampleJob.xml***  Will create a job called: ***ExampleJob***  "
});

documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#share-files-with-the-imagebox"] = "Share Files with the Image/Box";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#share-files-with-the-imagebox",
    title: "Share Files with the Image/Box",
    body: "## Share Files with the Image/Box If there are extra files needed to be shared from Ansible to Jenkins, place them in the following folder: ***provisioners/ansible/files/jenkins/shared***. This will create and copy these files to a folder in Jenkins home: ***{jenkins_home}/shared_ansible***. The default user will be the owner of these files once copied over but will be accessible to any user of the machine. "
});



documentTitles["042-update-override-variables.html#update-override-variables"] = "Update Override Variables";
index.add({
    url: "042-update-override-variables.html#update-override-variables",
    title: "Update Override Variables",
    body: "## Update Override Variables  ###Where to find these? These variables are located in different files in the ***provisioners/ansible/extra_vars*** folder. The file to change will depend on the environment you are provisioning.  "
});

documentTitles["042-update-override-variables.html#checkupdate-waiting-time-for-jenkins-restarts"] = "Check/Update Waiting time for jenkins restarts";
index.add({
    url: "042-update-override-variables.html#checkupdate-waiting-time-for-jenkins-restarts",
    title: "Check/Update Waiting time for jenkins restarts",
    body: "#### Check/Update Waiting time for jenkins restarts To override the time it waits (in seconds) for Jenkins to start please edit the respective file in the ***provisioners/ansible/extra_vars*** folder ```yaml startup_delay_s: 50 ``` "
});

documentTitles["042-update-override-variables.html#set-git-credentials"] = "Set Git Credentials";
index.add({
    url: "042-update-override-variables.html#set-git-credentials",
    title: "Set Git Credentials",
    body: "#### Set Git Credentials  Update the git name and email to the credentials specific to your Jenkins setup "
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings: - ***enable_configure:*** This enables the configuration of this plugin. When `false` will skip the configuration - ***email:*** This is the email of the Jenkins git user, will be used when the ci makes commits to git repositories - ***name:*** This is the full name of the Jenkins git user, will be used when the ci makes commits to git repositories  eg. ```yaml git:   enable_configure: true   email: 'noreply@gmail.com'   name: 'Jenkins CI' ``` "
});

documentTitles["042-update-override-variables.html#set-rally-variables-to-preconfigure-plugin"] = "Set Rally Variables to Preconfigure Plugin";
index.add({
    url: "042-update-override-variables.html#set-rally-variables-to-preconfigure-plugin",
    title: "Set Rally Variables to Preconfigure Plugin",
    body: "#### Set Rally Variables to Preconfigure Plugin  "
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings: - ***enable_configure:*** This enables the configuration of this plugin. When `false` will skip the configuration - ***server:*** This is rally's website address - ***email:*** Email (username) registered with rally - ***jenkins_machine:*** This is the domain name and port of the Jenkins server  eg. ```yaml rally:   enable_configure: true   server: \&quot;rally1.rallydev.com\&quot;   email: \&quot;\&quot;   jenkins_machine: \&quot;localhost:8080\&quot; ``` Please note that this step does not fully configure the rally plugin. You will have to navigate to ***configure system*** when Jenkins goes live and enter the password for the rally user/email   "
});

documentTitles["042-update-override-variables.html#edit-github-security-settings"] = "Edit GitHub Security Settings";
index.add({
    url: "042-update-override-variables.html#edit-github-security-settings",
    title: "Edit GitHub Security Settings",
    body: "#### Edit GitHub Security Settings To setup Jenkins security please edit the respective file in the ***provisioners/ansible/extra_vars*** folder with the necessary variables  "
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings:  - ***enable_security:*** This flag tells the playbook to enable security for the Jenkins instance. If false, the playbook will skip enabling security. - ***jenkins_admins:*** This is a list of github usernames that will have admin rights in the Jenkins instance - ***github_orgNames:*** This is a list of organisations that will have access to the Jenkins instance, including non-admin users. If omitted then only admins will have access. - ***github_clientId:*** This is a github application Client ID - ***github_clientSecret:*** This is a github application Client Secret  To get the information from github: - [Create a GitHub Application](https://github.com/settings/applications/new) that will provide the ***clientid*** and ***clientsecret***. - Set Authorization Callback URL:   ***http://{jenkins-server}:{port}/securityRealm/finishLogin***  eg. ```yaml security:   enable_security: true,   jenkins_admins: \&quot;admin1,admin2\&quot;, #comma delimited list eg. \&quot;admin1,admin2\&quot;   github_orgNames: \&quot;medullan\&quot;, #comma delimited list eg. \&quot;medullan,google\&quot;   github_clientId: \&quot;532534253fw3245\&quot;,   github_clientSecret: \&quot;32refwdfs324rewf343q4rwqr32qr\&quot; ``` "
});

documentTitles["042-update-override-variables.html#things-to-note"] = "Things to Note:";
index.add({
    url: "042-update-override-variables.html#things-to-note",
    title: "Things to Note:",
    body: "#### Things to Note: If there are raw xml config files that you want to be copied to Jenkins. Then simply adding them to the ***provisioners/ansible/files/jenkins/config*** directory will get them to Jenkins for pre-configuration.  "
});

documentTitles["042-update-override-variables.html#configure-jenkins-memory"] = "Configure Jenkins Memory";
index.add({
    url: "042-update-override-variables.html#configure-jenkins-memory",
    title: "Configure Jenkins Memory",
    body: "#### Configure Jenkins Memory  Configure the heap size Jenkins will be assigned on startup.  - ***enable_configure:*** This flag tells the playbook to enable security for the Jenkins instance. If false, the playbook will skip enabling security. - ***maxPermSize:*** Assign the MaxPermSize that jenkins will be assigned (\&quot;-XX:MaxPermSize=512m\&quot;) - ***memory:*** sets the heap size assigned to jenkins ('-Xmx1024m')  eg.  ```yaml jenkins_opts:   enable_configure: true,   maxPermSize: 512, # cannot be less than 512   memory: 1024 # cannot be less than 256 ```  "
});

documentTitles["042-update-override-variables.html#install-global-npm-packages"] = "Install global npm packages";
index.add({
    url: "042-update-override-variables.html#install-global-npm-packages",
    title: "Install global npm packages",
    body: "#### Install global npm packages  - ***global_packages:*** This is a space delimited list of npm packges eg. 'bower grunt-cli'  eg.  ```yaml npm:   # bower, grunt-cli and istanbul are installed by default   global_packages: \&quot;doxx npm-check-updates\&quot; # global_packages is a space delimited list eg. 'bower grunt-cli' ```"
});



documentTitles["043-build-images-with-packer.html#build-images-with-packer"] = "Build Images with Packer";
index.add({
    url: "043-build-images-with-packer.html#build-images-with-packer",
    title: "Build Images with Packer",
    body: "## Build Images with Packer  "
});

documentTitles["043-build-images-with-packer.html#build-an-aws-vagrant-box-and-ami-image"] = "Build an AWS Vagrant Box and AMI image";
index.add({
    url: "043-build-images-with-packer.html#build-an-aws-vagrant-box-and-ami-image",
    title: "Build an AWS Vagrant Box and AMI image",
    body: "### Build an AWS Vagrant Box and AMI image  To build an AWS Vagrant Box and AMI image:   Edit the ***packer.json*** file - put your access key - put your secret access key  - edit the description for the image, if necessary - edit the tags, if necessary - edit the region  ```json {       \&quot;type\&quot;: \&quot;amazon-ebs\&quot;,       \&quot;access_key\&quot;: \&quot;\&quot;, # put your access key here       \&quot;secret_key\&quot;: \&quot;\&quot;, # put your secret access key here       \&quot;region\&quot;: \&quot;us-west-2\&quot;,       \&quot;source_ami\&quot;: \&quot;ami-cf397aff\&quot;,       \&quot;instance_type\&quot;: \&quot;t1.micro\&quot;,       \&quot;ssh_username\&quot;: \&quot;ubuntu\&quot;,       \&quot;ami_name\&quot;: \&quot;medullan-ubuntu-latest-{{timestamp}}-{{isotime \\&quot;02-Jan-06\\&quot;}}\&quot;,       \&quot;ami_description\&quot;: \&quot;......\&quot;,        \&quot;tags\&quot;: {         \&quot;OS_Version\&quot;: \&quot;Ubuntu\&quot;,         \&quot;Release\&quot;: \&quot;Latest\&quot;,         \&quot;Provisioner\&quot;: \&quot;Medullan\&quot;       }     } ``` Then run ```bash $ packer build -only amazon-ebs packer.json ```  This will execute ***packer*** to provision an AMI image and create an AWS Vagrant Box at the end of the build process. - output file: ***packer_amazon-ebs_aws.box*** - eg. output image name: ***medullan-ubuntu-latest-1411750026-26-Sep-14*** (this is accompanied by an AMI id, can be seen in EC2 Console)  "
});

documentTitles["043-build-images-with-packer.html#build-a-virtualbox-vagrant-box"] = "Build a VirtualBox Vagrant Box";
index.add({
    url: "043-build-images-with-packer.html#build-a-virtualbox-vagrant-box",
    title: "Build a VirtualBox Vagrant Box",
    body: "### Build a VirtualBox Vagrant Box  To build a VirtualBox Vagrant Box, run  ```bash $ packer build -only virtualbox-iso packer.json ```  This will execute ***packer*** to provision an Ubuntu image and produce a VirtualBox Vagrant Box at the end of the build process. - output file: ***packer_virtualbox-iso_virtualbox.box***  "
});

documentTitles["043-build-images-with-packer.html#build-all-images-in-parallel"] = "Build All Images in Parallel";
index.add({
    url: "043-build-images-with-packer.html#build-all-images-in-parallel",
    title: "Build All Images in Parallel",
    body: "### Build All Images in Parallel   run:  ```bash $ packer build packer.json ```"
});



documentTitles["05-create-jenkins-environment-with-vagrant.html#create-jenkins-environment-with-vagrant"] = "Create Jenkins Environment with Vagrant";
index.add({
    url: "05-create-jenkins-environment-with-vagrant.html#create-jenkins-environment-with-vagrant",
    title: "Create Jenkins Environment with Vagrant",
    body: "# Create Jenkins Environment with Vagrant  There are currently two options for creating a Jenkins environment with Vagrant: - Locally with VirtualBox - Remotely in AWS (Amazon Web Services)"
});



documentTitles["051-provision-with-virtualbox.html#local-provisioning-with-virtualbox"] = "Local provisioning with VirtualBox";
index.add({
    url: "051-provision-with-virtualbox.html#local-provisioning-with-virtualbox",
    title: "Local provisioning with VirtualBox",
    body: "## Local provisioning with VirtualBox  By default, the Vagrantfile is setup to provision using VirtualBox and a clean ubuntu box from VagrantCloud  To provision: - run ***vagrant up*** to get the environment going - Get a drink, this will take approx. 30 mins for the first time you do **vagrant up** (excluding the time to retrieve the base box image)  "
});

documentTitles["051-provision-with-virtualbox.html#using-the-box-built-with-packer"] = "Using the Box Built with Packer";
index.add({
    url: "051-provision-with-virtualbox.html#using-the-box-built-with-packer",
    title: "Using the Box Built with Packer",
    body: "### Using the Box Built with Packer  if you built a shiny new box with **packer**, then to use it, you must change the box being referenced in the Vagrantfile.  default:  ```yaml config.vm.box = \&quot;ubuntu/trusty64\&quot; ```  should be updated to: ```yaml config.vm.box = \&quot;packer_virtualbox-iso_virtualbox.box\&quot; ```  then run  ```bash $ vagrant up ``` "
});



documentTitles["052-provision-jenkins-with-aws.html#provision-with-aws-amazon-web-service"] = "Provision with AWS (Amazon Web Service)";
index.add({
    url: "052-provision-jenkins-with-aws.html#provision-with-aws-amazon-web-service",
    title: "Provision with AWS (Amazon Web Service)",
    body: "## Provision with AWS (Amazon Web Service)  "
});

documentTitles["052-provision-jenkins-with-aws.html#step-1-change-the-vm-box-to-be-used"] = "Step 1 - Change the vm box to be used";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-1-change-the-vm-box-to-be-used",
    title: "Step 1 - Change the vm box to be used",
    body: "### Step 1 - Change the vm box to be used  To provision with AWS, the AWS box built with ***packer*** or a referenced AWS vagrant box from some archive must be used. If the box was built update the base box in the Vagrantfile  for eg.   ```yaml config.vm.box = \&quot;packer_amazon-ebs_aws.box\&quot; ``` "
});

documentTitles["052-provision-jenkins-with-aws.html#step-2-change-ansible-override-variables"] = "Step 2 - Change Ansible Override Variables";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-2-change-ansible-override-variables",
    title: "Step 2 - Change Ansible Override Variables",
    body: "### Step 2 - Change Ansible Override Variables  from: ```yaml ansible.extra_vars = \&quot;provisioners/ansible/extra_vars/jenkins-master-playbook-vars.yml\&quot; ``` to: ```yaml ansible.extra_vars = \&quot;provisioners/ansible/extra_vars/jenkins-master-aws-playbook-vars.yml\&quot; ```  "
});

documentTitles["052-provision-jenkins-with-aws.html#step-3-fill-in-required-aws-info"] = "Step 3 - Fill in required AWS info";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-3-fill-in-required-aws-info",
    title: "Step 3 - Fill in required AWS info",
    body: "### Step 3 - Fill in required AWS info  if you already understand what to do, please edit the AWS provider section in the Vagrantfile: ```yaml config.vm.provider :aws do |aws, override|       override.ssh.username = \&quot;ubuntu\&quot;       override.ssh.private_key_path = \&quot;\&quot; # location of rsa private key file here        aws.access_key_id = \&quot;\&quot; # Your access key id here       aws.secret_access_key = \&quot;\&quot; # Your secret access key here       aws.keypair_name = \&quot;\&quot;        aws.ami = \&quot;ami-8bda99bb\&quot; # replace with AMI id generated with packer if necessary       aws.security_groups = [\&quot;launch-wizard-1\&quot;] # replace with preferred security group, must have an ssh port       aws.region = \&quot;us-west-2\&quot; # replace with your region   end ```  then run: ``` $ vagrant up --provider=aws ```  This will create and run an AWS instance in your account.  For more information on provisioning with AWS please view the following repository:  https://github.com/mitchellh/vagrant-aws  "
});

documentTitles["052-provision-jenkins-with-aws.html#extras"] = "Extras";
index.add({
    url: "052-provision-jenkins-with-aws.html#extras",
    title: "Extras",
    body: "### Extras There are some Ansible roles that are shared when provisioning the base image and the Jenkins environments. One such role would be **setup**. If you wat to ignore this role when provisioning the Jenkins environments, Then uncomment the following line in the Vagrantfile:  ```yaml ansible.skip_tags = ['setup'] ```  "
});

documentTitles["052-provision-jenkins-with-aws.html#caveats"] = "Caveats";
index.add({
    url: "052-provision-jenkins-with-aws.html#caveats",
    title: "Caveats",
    body: "### Caveats  When provisioning the Jenkins environment with AWS for the first time, the provisioning will fail for SSH reasons.  This can be resolved by getting the IP address of the created instance in your `EC2 Console` and replacing the ip address within the `provisioners/ansible/ansible.host` file.  Current File ```yaml [jenkins] 127.0.0.1 ansible_ssh_port=2222 ```  Eg. of what to be updated to: ```yaml [jenkins] 54.69.58.64 ```"
});



documentTitles["06-documentation.html#documentation"] = "Documentation";
index.add({
    url: "06-documentation.html#documentation",
    title: "Documentation",
    body: "# Documentation  "
});

documentTitles["06-documentation.html#editing-the-docs"] = "Editing the Docs";
index.add({
    url: "06-documentation.html#editing-the-docs",
    title: "Editing the Docs",
    body: "## Editing the Docs You can edit the documentation by visiting the [Github wiki](https://github.com/medullan/vagrant-ansible-jenkins/wiki) of this repository. The wiki is parsed and use to generate the documentation for the [website](http://medullan.github.io/vagrant-ansible-jenkins).  "
});

documentTitles["06-documentation.html#generate-documentation-website"] = "Generate Documentation Website";
index.add({
    url: "06-documentation.html#generate-documentation-website",
    title: "Generate Documentation Website",
    body: "## Generate Documentation Website  To get started with generating the documentation, you must have already clone the [git repository](https://github.com/medullan/vagrant-ansible-jenkins) and be inside the root directory with your console.  The tools needed to get you started are all powered by [NPM](https://www.npmjs.org/) and [Grunt](http://gruntjs.com/). Therefore, you must have [nodejs](http://nodejs.org/) and **npm** installed with **grunt** installed globally as a **npm** package  "
});

documentTitles["06-documentation.html#step-1"] = "Step 1";
index.add({
    url: "06-documentation.html#step-1",
    title: "Step 1",
    body: "### Step 1  run ```bash $ npm install ```  This will install all **npm** modules/dependencies needed within the project to generate the documentation.  "
});

documentTitles["06-documentation.html#step-2"] = "Step 2";
index.add({
    url: "06-documentation.html#step-2",
    title: "Step 2",
    body: "### Step 2 run ```bash $ grunt docs ``` This will then generate the documentation locally to the **docs** folder.   "
});

documentTitles["06-documentation.html#deploy-docs-to-gh-pages"] = "Deploy Docs to GH-Pages";
index.add({
    url: "06-documentation.html#deploy-docs-to-gh-pages",
    title: "Deploy Docs to GH-Pages",
    body: "## Deploy Docs to GH-Pages  When the documentation is generated and parsed properly then you can deploy to the [website](http://medullan.github.io/vagrant-ansible-jenkins)  **NB.** Please review generated docs locally before deploying  You can do this by running: ```bash $ grunt deploy ``` "
});



documentTitles["07-known-issues.html#known-issues"] = "Known Issues";
index.add({
    url: "07-known-issues.html#known-issues",
    title: "Known Issues",
    body: "# Known Issues  "
});

documentTitles["07-known-issues.html#issue-shared-workspace-jenkins-plugin-woes"] = "Issue: shared-workspace Jenkins Plugin woes";
index.add({
    url: "07-known-issues.html#issue-shared-workspace-jenkins-plugin-woes",
    title: "Issue: shared-workspace Jenkins Plugin woes",
    body: "## Issue: shared-workspace Jenkins Plugin woes  &gt; The github-oauth@0.19 plugin doesnt play well with the shared-workspace plugin. &gt; At version 0.19, the github-oauth plugin checks each job for a git url and if this url is null then an exception is thrown. This happens when the ${SHAREDSPACE_SCM_URL} is used. This variable is null until a job is executed, hence the github-oauth plugin will throw a fit.  &gt;#### Resolution  &gt;Just avoid using that variable and everything will be ok.  "
});

documentTitles["07-known-issues.html#issue-invalid-machine-state-when-provisioning"] = "Issue: Invalid machine state when provisioning";
index.add({
    url: "07-known-issues.html#issue-invalid-machine-state-when-provisioning",
    title: "Issue: Invalid machine state when provisioning",
    body: "## Issue: Invalid machine state when provisioning  &gt; With `VirtualBox v4.3.14`, when doing `vagrant up`, an error (or similar error) sometimes occurs saying:  &gt; #### Exception  &gt; The guest machine entered an invalid state while waiting for it &gt; to boot. Valid states are 'starting, running'. The machine is in the &gt; 'poweroff' state. Please verify everything is configured &gt; properly and try again.  &gt; If the provider you're using has a GUI that comes with it, &gt; it is often helpful to open that and watch the machine, since the &gt; GUI often has more helpful error messages than Vagrant can retrieve. &gt; For example, if you're using VirtualBox, run `vagrant up` while the &gt; VirtualBox GUI is open.  &gt; #### Resolution:  &gt; To resolve the issue, downgrading to version `VirtualBox v4.3.12` worked  "
});

documentTitles["07-known-issues.html#issue-ansiblehost-turned-into-executable-file"] = "Issue: ansible.host turned into executable file";
index.add({
    url: "07-known-issues.html#issue-ansiblehost-turned-into-executable-file",
    title: "Issue: ansible.host turned into executable file",
    body: "## Issue: ansible.host turned into executable file &gt; Sometimes pulling the repository down will make `ansible.host` an executable file and will produce the following error:  &gt; ####Exception  &gt; ERROR: The file provisioners/ansible/ansible.host is marked as executable, &gt; but failed to execute correctly. If this is not supposed to be an executable script, &gt; correct this with `chmod -x provisioners/ansible/ansible.host`.  &gt; #### Resolution  &gt; To resolve the issue, run `chmod -x provisioners/ansible/ansible.host`"
});


