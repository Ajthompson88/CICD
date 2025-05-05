# 20 CI‑CD: GitHub Actions CI/CD Pipeline

## 🚀 Project Overview  
This repository demonstrates a complete Continuous Integration and Continuous Deployment (CI/CD) workflow using GitHub Actions. When a Pull Request is opened against the `develop` branch, Cypress component tests run automatically. When `develop` is merged into `main`, the application is deployed to Render. :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}

---

## 📖 User Story  
> **As** a developer seeking reliable quality checks before merging code,  
> **I want** a GitHub Actions workflow that runs Cypress tests on pull requests to `develop`,  
> **So that** I can ensure code integrity and automatically deploy only tested code to production. :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}

---

## ✅ Acceptance Criteria  
* **Pull Request Checks**  
  * WHEN a PR is opened against `develop`  
  * THEN Cypress component tests execute via GitHub Actions  
* **Automated Deployment**  
  * WHEN `develop` is merged into `main`  
  * THEN a GitHub Action triggers a deployment to Render  

---

## 🎬 Demo Video  
Watch the full CI/CD pipeline in action:  
[Demo Video on Google Drive](https://drive.google.com/file/d/1O0609-ntGrDZLH6d1f9D86mixrgDE3Qv/view)

---

## 📂 Repository  
Explore the source code and workflows:  
[GitHub – Ajthompson88/CICD](https://github.com/Ajthompson88/CICD)

---

## 🛠️ Installation & Setup  
1. **Clone this repo**  
   ```bash
   git clone https://github.com/Ajthompson88/CICD.git
   cd CICD
2. **Create branches**
    
    - develop for feature work

    - main for production-ready code

3. **Configure GitHub Secrets**
    
    - RENDER_API_KEY

    - RENDER_DEPLOY_HOOK

4. **Inspect workflows in .github/workflows/**
    
    - ci.yml for PR-based Cypress tests

    - cd.yml for main-branch Render deployment

## 💡 Usage

- Open a PR against develop to run tests.

- Merge develop into main to trigger deployment.

- Monitor Actions on GitHub for status and logs.

## 🔧 Technologies Used

- GitHub Actions for CI/CD

- Cypress for component testing

- Render for hosting and deployment

- Node.js, npm for build scripts

## Contributing

Contributions are welcome!

1. Fork the repo

2. Create a feature branch (git checkout -b feature/XYZ)

3. Commit your changes (git commit -m "Add XYZ")

4. Push to your fork (git push origin feature/XYZ)

5. Open a Pull Request

## **📄 License**

This project is licensed under the MIT License.

📫 Contact
- Email: aj.thompson8888@gmail.com

- GitHub: Ajthompson88

Thank you for reviewing this CI/CD pipeline—let’s keep deployments seamless and secure! 🎉