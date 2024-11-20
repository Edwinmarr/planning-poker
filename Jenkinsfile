pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS' // Configura el nombre que diste a NodeJS
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool name: 'SonarQube Scanner'
                    withSonarQubeEnv('SonarQube') { // Usa el nombre configurado en Jenkins
                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=planning-poker \
                        -Dsonar.sources=src \
                        -Dsonar.tests=src \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov-report/lcov.info \
                        -Dsonar.language=js \
                        -Dsonar.typescript.tsconfigPath=tsconfig.json \
                        -Dsonar.nodejs.executable=node
                        """
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
