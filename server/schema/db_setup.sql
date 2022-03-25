CREATE DATABASE reachoutlocal;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "User"
(
    user_id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name             VARCHAR(255)  NOT NULL,
    last_name              VARCHAR(255)  NOT NULL,
    aadhar                 BIGINT        NOT NULL UNIQUE,
    email                  VARCHAR(255)  NOT NULL UNIQUE,
    mobile                 BIGINT        NOT NULL UNIQUE,
    age                    INT           NOT NULL,
    password               VARCHAR(1000) NOT NULL,
    disability_certificate VARCHAR(1000),
    face_id                VARCHAR(1000),
    place                  VARCHAR(255)  NOT NULL,
    disability_type        VARCHAR(255)  NOT NULL,
    disability             VARCHAR(255)  NOT NULL,
    severity               INT           NOT NULL,
    qualifications         VARCHAR(255)  NOT NULL
);

CREATE TABLE "Company"
(
    company_id      UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name    VARCHAR(255)  NOT NULL,
    company_head    VARCHAR(255)  NOT NULL,
    company_mobile  BIGINT        NOT NULL UNIQUE,
    company_email   VARCHAR(255)  NOT NULL UNIQUE,
    company_website VARCHAR(1000),
    gstin           BIGINT        NOT NULL UNIQUE,
    password        VARCHAR(1000) NOT NULL
);

CREATE TABLE "Authority"
(
    authority_id   UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    authority_name VARCHAR(255)  NOT NULL,
    password       VARCHAR(1000) NOT NULL
);

CREATE TABLE "Scheme"
(
    scheme_id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scheme_name        VARCHAR(1000) NOT NULL,
    scheme_description TEXT,
    scheme_type        VARCHAR(255)  NOT NULL,
    scheme_authority   UUID  NOT NULL,
    scheme_date        DATE,
    scheme_link        VARCHAR(1000),
    CONSTRAINT scheme_auth_fk FOREIGN KEY (scheme_authority) REFERENCES "Authority" (authority_id)
);

CREATE TABLE "Grievance"
(
    grievance_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id      UUID NOT NULL,
    authority    VARCHAR(255),
    CONSTRAINT grievance_user_fk FOREIGN KEY (user_id) REFERENCES "User" (user_id)
);

CREATE TABLE "Job"
(
    job_id        UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id    UUID         NOT NULL,
    title         VARCHAR(255) NOT NULL,
    salary        INT          NOT NULL,
    description   TEXT,
    location      VARCHAR(255),
    sector        VARCHAR(255) NOT NULL,
    disability    VARCHAR(255) NOT NULL,
    qualification VARCHAR(255) NOT NULL,
    CONSTRAINT job_company_provider_fk FOREIGN KEY (company_id) REFERENCES "Company" (company_id)
);

CREATE TABLE "Beneficiary"
(
    beneficiary_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    scheme_id      UUID NOT NULL,
    user_id        UUID NOT NULL,
    CONSTRAINT beneficiary_scheme_fk FOREIGN KEY (scheme_id) REFERENCES "Scheme" (scheme_id),
    CONSTRAINT beneficiary_user_fk FOREIGN KEY (user_id) REFERENCES "User" (user_id)
);

CREATE TABLE "Application"
(
    application_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id         UUID NOT NULL,
    applicant_id   UUID NOT NULL,
    CONSTRAINT application_job_fk FOREIGN KEY (job_id) REFERENCES "Job" (job_id),
    CONSTRAINT application_user_fk FOREIGN KEY (applicant_id) REFERENCES "User" (user_id)
);


-- scheme_name=Deduction under 80U
-- scheme_description=Persons with disabilities are eligible for income tax deduction under Section 80U. Deduction of Rs. 50,000 is provided to those with disability in the range of 40 per cent to 80 per cent. Deduction of Rs. 1,00,000 is provided to those with more than 80 per cent disability. The individual should furnish a copy of a medical certificate under section 80U along with the income tax return. The medical certificate should be based on the disability and the prescribed medical authority.
-- scheme_type=General
-- scheme_authority=Ministry of Finance
-- date, link is null


DROP TABLE "Application" CASCADE;
DROP TABLE "Authority" CASCADE;
DROP TABLE "Beneficiary" CASCADE;
DROP TABLE "Scheme" CASCADE;
DROP TABLE "Company" CASCADE;
DROP TABLE "Grievance" CASCADE;
DROP TABLE "Job" CASCADE;
DROP TABLE "Scheme" CASCADE;
DROP TABLE "User" CASCADE;
