pipeline {

```
agent any

stages {

    stage('Build Docker Image') {
        steps {
            bat 'docker build -t node-docker-app:latest .'
        }
    }

    stage('Remove Old Container') {
        steps {
            bat 'docker rm -f node-app'
        }
    }

    stage('Deploy') {
        steps {
            bat 'docker run -d --name node-app -p 3000:3000 node-docker-app:latest'
        }
    }
}
```

}
