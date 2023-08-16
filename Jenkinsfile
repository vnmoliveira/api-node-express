pipeline {

    agent any
    
    stages {
        stage ('Build Image') {
            steps {
                script {
                    dockerapp = docker.build("vnmoliveira/api-web-express", '-f ./backend/Dockerfile ./backend') {
                        
                    }
                }

            }
        }
    }
}