export interface BankDetails {
  name: string;
  account_number: string;
  branch_name: string;
  branch_code: string;
  swift_code: string;
  account_type: string;
}

export interface Employment {
  employer_name: string;
  supervisor: string;
  position: string;
  employment_start_date: string;
  employment_retirement_date: string;
  phone: string;
  address: string;
  company_name: string;
  years_in_business: number;
}

export interface NextOfKin {
  first_name: string;
  last_name: string;
  mobile: string;
  relationship: string;
}

export interface Consents {
  consents: string[];
  non_consents: { name: string }[];
}

export interface AdditionalDetails {
  employment: Employment;
  nextOfKin: NextOfKin;
  bankDetails: BankDetails;
  consents: Consents;
}

export interface ISavedLoan {
  id: number;
  allocated_to: number;
  client_name: string;
  client_surname: string;
  client_email: string;
  client_id_number: string;
  client_mobile: string;
  product_id: number;
  loan_type_id: number;
  lock: boolean;
  loan_purpose: string;
  gender: string;
  stage_id: number;
  tenure: number;
  merchant_id: number;
  loan_amount: number;
  instalment_amount: number;
  approved_loan_amount: number;
  approved_instalment_amount: number;
  approved_refinance_amount: number;
  approved_net_disbursement: number;
  approved_tenure: number;
  loan_reference: string;
  buyoff_amount: number;
  net_disbursement: number;
  refinance_amount: number;
  employer_id: number;
  agent_id: number;
  has_exception: boolean;
  exception_note: string;
  lead_branch_id: number;
  additional_details: AdditionalDetails;
  transaction_json: {
    status: string;
    result_json: {
      loanId: string;
    };
    completed_at: string;
    request_json: {
      firstPaymentDate: string;
    };
  };
}
