#!/bin/bash



set -e
cd /Users/cz_michael/Google\ Drive/Work/workspace/BucketList
mvn clean 
mvn install -DskipTests

wait
echo "mvn clean install ......... Done!"

# shutdown tomcat
echo "" > /usr/local/apache-tomcat-7.0.59/logs/catalina.out
cd /usr/local/apache-tomcat-7.0.59/bin
./shutdown.sh

wait
echo "tomcat shutdown ......... Done!"


# remove older war
rm -rf /usr/local/apache-tomcat-7.0.59/webapps/ROOT/*
rm -rf /usr/local/apache-tomcat-7.0.59/webapps/BucketList-0.0.1-SNAPSHOT

wait
echo "removing old tomcat webapp files ......... Done!"


rsync --progress /Users/cz_michael/Google\ Drive/Work/workspace/BucketList/target/BucketList-0.0.1-SNAPSHOT.war /usr/local/apache-tomcat-7.0.59/webapps/BucketList-0.0.1-SNAPSHOT.war

wait
echo "rsync ......... Done!"


# extract war file into ROOT directory
cd /usr/local/apache-tomcat-7.0.59/webapps/ROOT
jar -xvf ../BucketList-0.0.1-SNAPSHOT.war


wait
echo "explode war file ......... Done!"


# startup tomcat
cd /usr/local/apache-tomcat-7.0.59/bin
export JPDA_ADDRESS=8000
export JPDA_TRANSPORT=dt_socket
./catalina.sh jpda start

wait
echo "tomcat startup ......... Done!"


wait
# start Gulp
cd /Users/cz_michael/Google\ Drive/Work/workspace/BucketList
gulp