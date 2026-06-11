pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/the13beats/node-docker-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-docker-app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f node-app || true

                docker run -d \
                  --name node-app \
                  -p 3000:3000 \
                  node-docker-app:latest
                '''
            }
        }
    }
}
