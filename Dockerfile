FROM maven:3.8-jdk-11 AS MAVEN_TOOL_CHAIN
COPY pom.xml /tmp/
COPY src /tmp/src/
WORKDIR /tmp/
RUN mvn clean package --no-transfer-progress
RUN ls /tmp/target/*.jar

FROM tomcat:9.0.53-jre11-temurin
COPY --from=MAVEN_TOOL_CHAIN /tmp/target/monitors-0.0.1-SNAPSHOT.jar $CATALINA_HOME/webapps/
EXPOSE 9002
RUN echo $CATALINA_HOME
ENTRYPOINT ["java","-jar","/usr/local/tomcat/webapps/monitors-0.0.1-SNAPSHOT.jar"]
