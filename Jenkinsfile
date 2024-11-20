pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                dir('planning-poker') {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('planning-poker') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('planning-poker') {
                    sh 'npm run test'
                }
            }
        }

        stage('Convert Coverage to LCOV') {
            steps {
                dir('planning-poker') {
                    sh 'npx jest-lcov-reporter --inputFile=coverage/coverage-final.json --outputFile=coverage/lcov.info'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                dir('planning-poker') {
                    script {
                        def scannerHome = tool name: 'SonarQube Scanner'
                        withSonarQubeEnv('SonarQube') {
                            sh """
                            ${scannerHome}/bin/sonar-scanner \
                            -Dsonar.projectKey=planning-poker \
                            -Dsonar.sources=src \
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                            -Dsonar.language=js \
                            -Dsonar.nodejs.executable=node
                            """
                        }
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
