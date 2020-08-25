FROM maven:alpine AS build-env

ADD . /app
WORKDIR /app

RUN mvn clean
RUN mvn package -DskipTests

FROM openjdk:alpine

WORKDIR /
COPY --from=build-env /app/target/survey-0.0.1-SNAPSHOT.jar ./

EXPOSE 8080

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","survey-0.0.1-SNAPSHOT.jar"]