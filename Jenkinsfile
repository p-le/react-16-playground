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

    }
}