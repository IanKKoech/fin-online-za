declare module "AppTypes" {
  import { Database as SupabaseDB } from "@/types/supabase";
  export interface AppState {
    bankDetails: BankConfiguration | null;
    organisationProducts: OrganisationProduct[] | null;
  }

  export interface FormStep {
    stepName: string;
    formSections: FormSection[];
    nextButtonLabel?: string;
    previousButtonLabel?: string;
    submitButtonLabel?: string;
    maxFormHeight?: number;
    maxFormWidth?: number;
    hasInstalmentCalc?: boolean;
    validationSchema?: Yup.ObjectSchema<any>;
    stepTriggers?: StepTrigger[];
  }

  export interface FormSection {
    stepTitle?: string;
    stepDescription?: string;
    icon?: React.ReactNode;
    iconName?: string;
    fields: FormField[];
    columns: number;
  }

  export interface FormField {
    name: string;
    label: string;
    type: string;
    description?: string;
    options?: Option[];
    validation?: string;
    required?: boolean;
    min?: number;
    max?: number;
    step?: number;
    prefix?: string;
    fileType?: string;
    accept?: string;
    html?: string;
    link?: { url: string; label: string };
    hidden?: boolean;
    signInDisabled?: boolean;
    requireProduct?: boolean;
    length?: number;
    color?: string;
  }

  export interface Option {
    label: string;
    value: string;
  }

  export interface CDEResult {
    term: number;
    minimum: number;
    maximum: number;
  }

  export interface StepTrigger {
    name: string;
    type: string;
    loadingMessage: string;
    successMessage: string;
    errorMessage: string;
    values: string[];
    documentType?: number;
    documentFieldName?: string;
    postgrestParams?: PostGrestParams;
  }

  export interface PreAgreement {
    template: string;
  }

  export interface Offer {
    request_id: string;
    order_id: string;
    max_amount: string;
    min_amount: string;
    loan_amount: string;
    max_term: string;
    min_term: string;
    term: string;
    charges: string;
    installment: string;
    lifeAssuarance: string;
  }

  export interface BankConfiguration {
    name: string;
    universalBankCode: string;
    swiftCode: string;
    accountIndicator?: number;
    weightingDigits?: string;
    fudgeFactor?: number;
    modulus?: number;
    exceptCode?: string;
    validLengths?: string;
    accountNumber?: string;
    holderName?: string;
    accountType?: string;
  }

  export interface AddressData {
    surburb: string;
    city: string;
    postalCode: string;
  }

  export interface Promotion {
    image: string;
    title: string;
    description: string;
  }

  export interface Product {
    term: number;
    minimum: number;
    maximum: number;
  }

  export interface OrganisationProduct
    extends SupabaseDB["public"]["Tables"]["organisation_products"]["Row"] {}

  export interface SupabaseEdgeResponse {
    message: SupabaseEdgeResponseParams;
    error?: any;
  }

  interface SupabaseEdgeResponseParams {
    id: string;
    result: number;
    message: string;
    data: any;
  }

  export interface ChargesResultObject {
    description: string;
    value: number;
    charge_time: "Disbursement" | "Installment";
    capitalised: boolean;
  }

  export interface DynamicCharges {
    rules: ChargesRule[];
  }

  export interface ChargesRule {
    max: number;
    min: number;
    diff: number;
    value: number;
    offset: number;
    calculation: string;
  }

  export interface ProductCharges {
    id: number;
    name: string;
    calculation: { id: number; name: string };
    value: number;
    charge_type: number;
    json_values: JSON;
    fin_charge_ref: number;
    is_included_in_capitalised_amount: boolean;
  }

  export interface VccbCreditReportResponse {
    crContactDataResponse?: CrContactDataResponse[];
    crInstalmentAmount?: CrInstalmentAmount[];
    crCIPCDetails?: CrCipcdetail[];
    crPrevEnq?: CrPrevEnq[];
    crProp?: CrProp[];
    crJudg?: CrJudg[];
    crAdverse?: CrAdverse[];
    crCollect?: CrCollect[];
    crDrv?: CrDrv;
    crIsDispute?: CrIsDispute[];
    creditReportAccounts?: CreditReportAccount[];
    crScore?: CrScore[];
    crDebtOrders?: CrDebtOrder[];
    crFraud?: CrFraud[];
    crClosedPaidUp?: CrClosedPaidUp[];
    crReportBytes?: CrReportByte[];
    crAccountDataSummary?: CrAccountDataSummary[];
    title?: string;
    status?: string;
    detail?: string;
    instance?: string;
    traceId?: string;
    randomUUID?: string;
    inDispute?: boolean;
    isLowCreditScore?: boolean;
  }

  export interface CrContactDataResponse {
    id_number?: string;
    birth_Date?: string;
    surname?: string;
    initials?: string;
    names?: string;
    callName?: string;
    titleNo?: string;
    deathDate?: string;
    maritalStatus?: string;
    divorceDate?: string;
    birthPlace?: string;
    deathPlace?: string;
    marriagePlace?: string;
    deathStatus?: string;
    address1Line1?: string;
    address1Line2?: string;
    address1Suburb?: string;
    address1Town?: string;
    address1PostalCode?: string;
    address1Date?: string;
    address2Line1?: string;
    address2Line2?: string;
    address2Suburb?: string;
    address2Town?: string;
    address2PostalCode?: string;
    address2Date?: string;
    address3Line1?: string;
    address3Line2?: string;
    address3Suburb?: string;
    address3Town?: string;
    address3PostalCode?: string;
    address3Date?: string;
    h_Phone_1?: string;
    h_Phone_1_Date?: string;
    h_Phone_2?: string;
    h_Phone_2_Date?: string;
    h_Phone_3?: string;
    h_Phone_3_Date?: string;
    h_Phone_4?: string;
    h_Phone_4_Date?: string;
    h_Phone_5?: string;
    h_Phone_5_Date?: string;
    w_Phone_1?: string;
    w_Phone_1_Date?: string;
    w_Phone_2?: string;
    w_Phone_2_Date?: string;
    w_Phone_3?: string;
    w_Phone_3_Date?: string;
    w_Phone_4?: string;
    w_Phone_4_Date?: string;
    w_Phone_5?: string;
    w_Phone_5_Date?: string;
    c_Phone_1?: string;
    c_Phone_1_Date?: string;
    c_Phone_2?: string;
    c_Phone_2_Date?: string;
    c_Phone_3?: string;
    c_Phone_3_Date?: string;
    c_Phone_4?: string;
    c_Phone_4_Date?: string;
    c_Phone_5?: string;
    c_Phone_5_Date?: string;
    o_Phone_1?: string;
    o_Phone_1_Date?: string;
    o_Phone_2?: string;
    o_Phone_2_Date?: string;
    o_Phone_3?: string;
    o_Phone_3_Date?: string;
    o_Phone_4?: string;
    o_Phone_4_Date?: string;
    o_Phone_5?: string;
    o_Phone_5_Date?: string;
    email_1?: string;
    email_1_Date?: string;
    email_2?: string;
    email_2_Date?: string;
    email_3?: string;
    email_3_Date?: string;
    employer_1?: string;
    employer_1_Date?: string;
    employer_1_JobTitile?: string;
    employer_2?: string;
    employer_2_Date?: string;
    employer_2_JobTitile?: string;
    employer_3?: string;
    employer_3_Date?: string;
    employer_3_JobTitile?: string;
    iD_Gender?: string;
    iD_Age?: string;
    iD_Issued_Date?: string;
    marriage_Date?: string;
    maiden_Name?: string;
    last_Verify?: string;
  }

  export interface CrInstalmentAmount {
    instalmentAmount?: number;
  }

  export interface CrCipcdetail {
    director_Status?: string;
    director_Type?: string;
    business_Registration_No?: string;
    business_Name?: string;
    business_Started_Date?: string;
    business_Industry?: string;
    business_Status?: string;
    tax_No?: string;
  }

  export interface CrPrevEnq {
    search_Date?: string;
    company_Name?: string;
    user_Name?: string;
    business_Tel?: string;
  }

  export interface CrProp {
    deedsOffice?: string;
    share?: string;
    titleDeedNo?: string;
    titleDeedFee?: number;
    transactionDate?: string;
    dateRegister?: string;
    transactionAmount?: number;
    streetAddress?: string;
    streetNumber?: string;
    streetName?: string;
    streetType?: string;
    suburbDeeds?: string;
    town?: string;
    authority?: string;
    provinceDescription?: string;
    municipalityName?: string;
    extent?: number;
    bondNumber?: string;
    bondHolder?: string;
    bondAmount?: string;
    propertyName?: string;
    erf?: string;
    portion?: number;
    unit?: number;
    propertyYear?: number;
    erfSize?: string;
    suburbId?: string;
  }

  export interface CrJudg {
    judgementNo?: string;
    headerNo?: string;
    courtName?: string;
    caseNumber?: string;
    plaintiff?: string;
    attorneyName?: string;
    applicationDate?: string;
    caseFilingDate?: string;
    caseType?: string;
    caseReason?: string;
    courtCity?: string;
    courtType?: string;
    courtCaseID?: string;
    plaintiffAddress?: string;
    attorneyOfficeNumber?: string;
    attorneyAddressLine1?: string;
    attorneyAddressLine2?: string;
    attorneyAddressSuburb?: string;
    attorneyAddressTown?: string;
    attorneyAddressCode?: string;
    grantedDate?: string;
    paidUpDate?: string;
    amount?: number;
    removed?: boolean;
  }

  export interface CrAdverse {
    name?: string;
    account_No?: string;
    date_Account_Opened?: string;
    current_Balance?: number;
    installment_amount?: number;
    adverse_Date?: string;
  }

  export interface CrCollect {
    name?: string;
    account_No?: string;
    current_Balance?: number;
    installment_Amount?: number;
    amount_Overdue?: number;
    handover_Date?: string;
  }

  export interface CrDrv {
    counsellorRegistrationNumber?: string;
    counsellor_First_Name?: string;
    counsellor_Last_Name?: string;
    counsellor_Contact_Number?: string;
    status_Date?: string;
    debt_Review_Status_Code?: string;
    debt_Review_Status?: string;
    in_Debt_Review?: string;
    address_Line_1?: string;
    address_Line_2?: string;
    address_Line_3?: string;
    address_Line_4?: string;
    address_Line_5?: string;
    address_Line_Postal_Code?: string;
    postal_Address_Line_1?: string;
    postal_Address_Line_2?: string;
    postal_Address_Line_3?: string;
    postal_Address_Line_4?: string;
    postal_Address_Line_5?: string;
    postal_Address_Postal_Code?: string;
    phone_Number?: string;
    fax_Number?: string;
    email_Address?: string;
    town?: string;
    unique_Consumer_No?: string;
  }

  export interface CrIsDispute {
    isDispute?: boolean;
  }

  export interface CreditReportAccount {
    name?: string;
    account_No?: string;
    date_Account_Opened?: string;
    last_Payment?: string;
    opening_Balance_Credit_Limit?: number;
    current_Balance?: number;
    amount_Overdue?: number;
    installment_Amount?: number;
    hyphen_CP_Code?: string;
    account_Type?: string;
    industry_Type?: string;
    account_ID?: string;
    acc_Status?: string;
    status_Date?: string;
    status_Code_No?: number;
    account_Type_No?: string;
    credit_Cause?: string;
    srn?: string;
    non_hashed_account_no?: string;
    supplier_Name?: string;
    supplier_Group_Name?: string;
    repayment_Frequency?: string;
    no_Of_Participants_In_Loan?: number;
    paymentProfile?: PaymentProfile[];
    term?: number;
    arrearsCount?: number;
    ownershipType?: string;
  }

  export enum VCCBProcessType {
    SCORE = "genericScore",
    STANDARDREPORT = "standardReport",
  }

  export enum CalculationType {
    FLAT = 1,
    PERCENTAGE_OF_LOAN_AMOUNT = 2,
    VARIABLE = 3,
    PERCENTAGE_OF_CAPITALIZED_AMOUNT = 4,
  }

  export enum ChargeType {
    DISBURSEMENT = 1,
    INSTALMENT = 2,
  }
}
