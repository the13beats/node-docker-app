pipeline {
    agent any

    environment {
        IMAGE_NAME = "pratham1310/node-docker-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% ."
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    bat '''
                    docker login -u %DOCKER_USER% -p %DOCKER_PASS%
                    '''
                }
            }
        }

        stage('Push Image') {
            steps {
                bat "docker push %IMAGE_NAME%:%IMAGE_TAG%"
            }
        }
        
        stage('Check K8s') {
    steps {
        bat 'kubectl get nodes'
    }
}
        stage('Deploy to Minikube') {
            steps {
                bat '''
                kubectl set image deployment/node-docker-app node-docker-app=%IMAGE_NAME%:%IMAGE_TAG%
                '''
            }
        }
    }
}

