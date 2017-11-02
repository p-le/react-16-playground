pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo 'Install dependencies'
                sh 'yarn install'
                echo 'Build'
                sh 'yarn run build'
            }
        }
        stage('Deploy') {
            steps {
              echo 'Clear Folder'
              sh 'rm -rf /var/www/react/*'
              echo 'Copy file'
              sh 'mv ./build/* /var/www/react'
            }
        }

    }
}