pipeline {
  agent any
  stages {
    stage("Verification des outils ") {
      steps {
        bat 'docker version'
        bat 'docker info'
        bat 'docker compose version'
            }
        }
    stage("Creations des volumes ") {
     steps {
            bat 'docker system prune -a --volumes -f'
        }
    }
    stage(" Demarrage de container ") {
     steps {
             bat 'docker compose up -d'
             bat 'docker compose ps'
        }
    }
    

    stage('Check Response') {
        steps {
            bat 'curl http://192.168.20.38:3010'
        }
    } 

  }

  post{
    always{
        // bat 'docker compose down --remove-orphans -v'
        bat 'docker compose ps'
    }
}
}