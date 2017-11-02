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
              sh 'rm -rf /usr/share/nginx/html/*'
              echo 'Copy file'
              sh 'mv ./build/* /usr/share/nginx/html'
            }
        }

    }
}