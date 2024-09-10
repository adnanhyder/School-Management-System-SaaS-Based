# School Management System (SaaS-Based) Laravel 11 & React

## Introduction

This is a comprehensive School Management System developed as a SaaS-based application to cater to multiple schools and branches. The system provides a wide range of features for managing schools, including student management, teacher management, fees, attendance, salary, inventory, and more. Built using Laravel, Vue.js 3, React, Inertia.js, and Tailwind CSS, the system ensures a smooth and responsive experience for both administrators and users. Each module in the system is designed with full CRUD (Create, Read, Update, Delete) functionality, providing flexibility and control over the management of school-related data.

## Features

- **Multi-School & Multi-Branch Support**: Manage multiple schools and branches under one system.
- **Sessions Management**: Track and manage academic sessions and terms.
- **Class Management**: Organize and manage class information, including class types and sections.
- **Student Management**: Enroll and manage students, including student profiles, admissions, and related academic information.
- **Teacher Management**: Manage teacher profiles, assign teachers to classes, and track their performance.
- **Fee Report & Categories**: Generate and manage fee reports for students, and create and categorize various fee types.
- **Attendance Report**: Track attendance for both students and teachers with daily, weekly, and monthly reports.
- **Employee Salary Management**: Manage and generate payroll reports for employees, including salary breakdowns and adjustments.
- **Inventory Management**: Keep track of inventory, including school supplies, equipment, and other assets.
- **Gatepass System**: Create and manage gate passes for students, staff, and visitors.
- **Item Categories**: Categorize inventory items for easier tracking and management.
- **Dashboard**: A centralized dashboard providing an overview of key metrics such as student enrollment, attendance, fee collection, and inventory status.
- **Task & Project Management**: Manage tasks and projects related to school operations, assign responsibilities, and track progress.
- **User Management**: Create, manage, and assign roles to users of the system.
- **Role-Based Access Control (RBAC)**: Assign different roles to users (admin, teacher, staff, etc.) with appropriate access rights to different modules.
- **School & Branch Management**: Handle multiple schools and their respective branches under one system.

---

## Table of Contents

1. [Installation](#installation)
2. [Modules Overview](#modules-overview)
3. [Usage](#usage)
4. [License](#license)

---

## Installation

### Prerequisites

- PHP 8.2+
- Laravel 11.x
- Node.js & NPM
- Composer
- MySQL / PostgreSQL

### Steps to Install

1. Clone the repository:
    ```bash
    git clone https://github.com/adnanhyder/School-Management-System-SaaS-Based.git
    cd school-management-system
    ```

2. Install Composer dependencies:
    ```bash
    composer install
    ```

3. Install NPM dependencies:
    ```bash
    npm install
    npm run dev
    ```

4. Set up the environment file:
    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your database and other configurations.

5. Generate the application key:
    ```bash
    php artisan key:generate
    ```

6. Run the migrations:
    ```bash
    php artisan migrate
    ```

7. Seed the database (optional):
    ```bash
    php artisan db:seed
    ```

8. Serve the application:
    ```bash
    php artisan serve
    ```

---

## Modules Overview

### 1. Sessions Management
- **Description**: Manage academic sessions (years or terms).
- **CRUD**: Create, Read, Update, Delete session records.

### 2. Class Management
- **Description**: Manage class data including sections and subjects.
- **CRUD**: Full control over adding, editing, and deleting classes.

### 3. Student Management
- **Description**: Handle student profiles, admissions, and academic details.
- **CRUD**: Add, edit, delete student records, and search for students.

### 4. Teacher Management
- **Description**: Manage teacher profiles and their assignments to classes.
- **CRUD**: Create, read, update, and delete teacher information.

### 5. Fee Report & Categories
- **Description**: Generate and manage student fee reports and categories.
- **CRUD**: Add, update, delete fee categories, and manage reports.

### 6. Attendance Report
- **Description**: Track and report on attendance for students and teachers.
- **CRUD**: Create, edit, and delete attendance records.

### 7. Salary of Employees
- **Description**: Manage payroll, employee salary reports, and adjustments.
- **CRUD**: Add, modify, and delete salary records for employees.

### 8. Inventory Management
- **Description**: Track and manage school supplies, equipment, and assets.
- **CRUD**: Full inventory CRUD management.

### 9. Gatepass Management
- **Description**: Manage gate passes for students, staff, and visitors.
- **CRUD**: Create, edit, and delete gate passes.

### 10. Item Categories
- **Description**: Categorize inventory items for easy management.
- **CRUD**: Manage categories for all inventory items.

### 11. Dashboard
- **Description**: A dynamic dashboard to view school metrics like student enrollment, attendance, fees, and inventory status.
- **CRUD**: Customizable widgets and real-time updates.

### 12. Task & Project Management
- **Description**: Manage school-related projects and tasks, assign tasks, and monitor progress.
- **CRUD**: Full task and project management.

### 13. User Management
- **Description**: Manage user accounts and roles.
- **CRUD**: Add, modify, and delete users.

### 14. Role Management
- **Description**: Assign roles and permissions to users.
- **CRUD**: Manage user roles and access levels.

### 15. School & Branch Management
- **Description**: Handle multiple schools and branches under one system.
- **CRUD**: Create, update, and delete school and branch records.

---

## Usage

After installation, you can access the various modules from the sidebar or dashboard. Each module offers CRUD functionality to manage data and generate reports for the respective features. The system is designed to be user-friendly with a clean, responsive UI powered by Vue.js 3 and Tailwind CSS.

- **Admin Panel**: For managing users, roles, schools, branches, and global settings.
- **School Dashboard**: For viewing metrics specific to individual schools or branches.
- **Task & Project Management**: Assign and track tasks and projects across schools.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Contact

For any questions or issues, feel free to open a GitHub issue or contact me at [12345adnan@gmail.com](12345adnan@gmail.com) or visit [Xpertcodes](https://xpertcodes.com)
