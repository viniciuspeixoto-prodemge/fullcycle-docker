FROM golang:alpine3.18 AS build
WORKDIR /opt
COPY hello.go /opt
RUN go mod init example/hello && \
    go build .
CMD [ "go", "run", "." ]


FROM scratch
WORKDIR /opt
COPY --from=build /opt/hello /opt/
CMD [ "./hello" ]
