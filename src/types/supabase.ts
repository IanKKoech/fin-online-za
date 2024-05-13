export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      banks: {
        Row: {
          account_indicator: number | null
          apply_result: number | null
          bank_code: string | null
          created_at: string | null
          except_code: string | null
          fudge_factor: number | null
          id: number
          journalRefId: number | null
          modulus: number | null
          name: string | null
          status: number | null
          valid_lengths: string | null
          weighting_digits: string | null
        }
        Insert: {
          account_indicator?: number | null
          apply_result?: number | null
          bank_code?: string | null
          created_at?: string | null
          except_code?: string | null
          fudge_factor?: number | null
          id?: number
          journalRefId?: number | null
          modulus?: number | null
          name?: string | null
          status?: number | null
          valid_lengths?: string | null
          weighting_digits?: string | null
        }
        Update: {
          account_indicator?: number | null
          apply_result?: number | null
          bank_code?: string | null
          created_at?: string | null
          except_code?: string | null
          fudge_factor?: number | null
          id?: number
          journalRefId?: number | null
          modulus?: number | null
          name?: string | null
          status?: number | null
          valid_lengths?: string | null
          weighting_digits?: string | null
        }
        Relationships: []
      }
      batch_orders: {
        Row: {
          created_at: string
          id: string
          linked_external_party: string | null
          organisation: number | null
          request_log: Json | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          linked_external_party?: string | null
          organisation?: number | null
          request_log?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          linked_external_party?: string | null
          organisation?: number | null
          request_log?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "batch_orders_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "batch_orders_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      bonster_configs: {
        Row: {
          created_at: string | null
          id: number
          organisation: number | null
          password: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          organisation?: number | null
          password?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          organisation?: number | null
          password?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bonster_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      capi_absa_configs: {
        Row: {
          api_key: string | null
          created_at: string | null
          creditor_account_number: string | null
          creditor_email: string | null
          creditor_name: string | null
          creditor_phone: string | null
          creditor_scheme_name: string | null
          creditor_ultimate_name: string | null
          currency: string | null
          debit_value_type: number | null
          description: string | null
          id: number
          organisation: number | null
          password: string | null
          username: string | null
        }
        Insert: {
          api_key?: string | null
          created_at?: string | null
          creditor_account_number?: string | null
          creditor_email?: string | null
          creditor_name?: string | null
          creditor_phone?: string | null
          creditor_scheme_name?: string | null
          creditor_ultimate_name?: string | null
          currency?: string | null
          debit_value_type?: number | null
          description?: string | null
          id?: number
          organisation?: number | null
          password?: string | null
          username?: string | null
        }
        Update: {
          api_key?: string | null
          created_at?: string | null
          creditor_account_number?: string | null
          creditor_email?: string | null
          creditor_name?: string | null
          creditor_phone?: string | null
          creditor_scheme_name?: string | null
          creditor_ultimate_name?: string | null
          currency?: string | null
          debit_value_type?: number | null
          description?: string | null
          id?: number
          organisation?: number | null
          password?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "capi_absa_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      charge_calculation: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      charge_type: {
        Row: {
          created_at: string | null
          id: number
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          type: string
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: string
        }
        Relationships: []
      }
      charges: {
        Row: {
          calculation: number
          charge_code: string | null
          charge_type: number | null
          created_at: string | null
          description: string | null
          fin_charge_ref: number | null
          id: number
          is_included_in_capitalised_amount: boolean
          json_values: Json | null
          name: string
          organization_product: number
          settlement_fee: number | null
          value: number
        }
        Insert: {
          calculation: number
          charge_code?: string | null
          charge_type?: number | null
          created_at?: string | null
          description?: string | null
          fin_charge_ref?: number | null
          id?: number
          is_included_in_capitalised_amount?: boolean
          json_values?: Json | null
          name?: string
          organization_product: number
          settlement_fee?: number | null
          value: number
        }
        Update: {
          calculation?: number
          charge_code?: string | null
          charge_type?: number | null
          created_at?: string | null
          description?: string | null
          fin_charge_ref?: number | null
          id?: number
          is_included_in_capitalised_amount?: boolean
          json_values?: Json | null
          name?: string
          organization_product?: number
          settlement_fee?: number | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "charges_calculation_fkey"
            columns: ["calculation"]
            referencedRelation: "charge_calculation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "charges_charge_type_fkey"
            columns: ["charge_type"]
            referencedRelation: "charge_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "charges_organization_product_fkey"
            columns: ["organization_product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          }
        ]
      }
      clearing_account_service_config: {
        Row: {
          branch_id: number | null
          branch_name: string | null
          clearing_account_gl_account_id: number | null
          created_at: string
          financial_period_start_from: string | null
          id: string
          organisation_id: number | null
        }
        Insert: {
          branch_id?: number | null
          branch_name?: string | null
          clearing_account_gl_account_id?: number | null
          created_at?: string
          financial_period_start_from?: string | null
          id?: string
          organisation_id?: number | null
        }
        Update: {
          branch_id?: number | null
          branch_name?: string | null
          clearing_account_gl_account_id?: number | null
          created_at?: string
          financial_period_start_from?: string | null
          id?: string
          organisation_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "clearing_account_service_config_organisation_id_fkey"
            columns: ["organisation_id"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      clearing_account_service_jobs: {
        Row: {
          created_at: string
          errors: string | null
          id: string
          organisation: number | null
          status:
            | Database["public"]["Enums"]["clearing_account_job_status"]
            | null
          type: Database["public"]["Enums"]["clearing_account_job_type"] | null
        }
        Insert: {
          created_at?: string
          errors?: string | null
          id?: string
          organisation?: number | null
          status?:
            | Database["public"]["Enums"]["clearing_account_job_status"]
            | null
          type?: Database["public"]["Enums"]["clearing_account_job_type"] | null
        }
        Update: {
          created_at?: string
          errors?: string | null
          id?: string
          organisation?: number | null
          status?:
            | Database["public"]["Enums"]["clearing_account_job_status"]
            | null
          type?: Database["public"]["Enums"]["clearing_account_job_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "clearing_account_service_jobs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      clearing_account_service_journal_entries: {
        Row: {
          amount: number | null
          comments: string | null
          created_at: string
          credit: number | null
          debit: number | null
          entries: Json | null
          errors: string | null
          fineract_response: Json | null
          fineract_response_code: number | null
          id: string
          job_id: string | null
          loan_id: string | null
          office_id: string | null
          organisation_id: number | null
          reference_number: string | null
          reverse_response: string | null
          transaction_created_at: string | null
          transaction_date: string | null
        }
        Insert: {
          amount?: number | null
          comments?: string | null
          created_at?: string
          credit?: number | null
          debit?: number | null
          entries?: Json | null
          errors?: string | null
          fineract_response?: Json | null
          fineract_response_code?: number | null
          id?: string
          job_id?: string | null
          loan_id?: string | null
          office_id?: string | null
          organisation_id?: number | null
          reference_number?: string | null
          reverse_response?: string | null
          transaction_created_at?: string | null
          transaction_date?: string | null
        }
        Update: {
          amount?: number | null
          comments?: string | null
          created_at?: string
          credit?: number | null
          debit?: number | null
          entries?: Json | null
          errors?: string | null
          fineract_response?: Json | null
          fineract_response_code?: number | null
          id?: string
          job_id?: string | null
          loan_id?: string | null
          office_id?: string | null
          organisation_id?: number | null
          reference_number?: string | null
          reverse_response?: string | null
          transaction_created_at?: string | null
          transaction_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clearing_account_service_journal_entries_organisation_id_fkey"
            columns: ["organisation_id"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      clients_blacklist: {
        Row: {
          created_at: string
          created_by_user_id: string | null
          id: number
          id_number: string
          is_active: boolean | null
          notes: string | null
          organisation: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by_user_id?: string | null
          id?: number
          id_number: string
          is_active?: boolean | null
          notes?: string | null
          organisation: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by_user_id?: string | null
          id?: number
          id_number?: string
          is_active?: boolean | null
          notes?: string | null
          organisation?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_blacklist_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      comms_logs: {
        Row: {
          created_at: string
          created_by: number | null
          email_from: string | null
          email_to: string | null
          external_ref: string
          id: number
          linked_external: string | null
          linked_order: string | null
          linked_organisation: number
          msg_content: Json
          service_name: string
          sms_from: string | null
          sms_to: string | null
          status_log: Json | null
          status_message: string | null
          succeeded: boolean
          template: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          email_from?: string | null
          email_to?: string | null
          external_ref?: string
          id?: number
          linked_external?: string | null
          linked_order?: string | null
          linked_organisation?: number
          msg_content?: Json
          service_name?: string
          sms_from?: string | null
          sms_to?: string | null
          status_log?: Json | null
          status_message?: string | null
          succeeded?: boolean
          template?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: number | null
          email_from?: string | null
          email_to?: string | null
          external_ref?: string
          id?: number
          linked_external?: string | null
          linked_order?: string | null
          linked_organisation?: number
          msg_content?: Json
          service_name?: string
          sms_from?: string | null
          sms_to?: string | null
          status_log?: Json | null
          status_message?: string | null
          succeeded?: boolean
          template?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "comms_logs_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "external_parties_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_logs_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "external_user_views"
            referencedColumns: ["link_id"]
          },
          {
            foreignKeyName: "comms_logs_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_enhanced"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_logs_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_logs_template_fkey"
            columns: ["template"]
            referencedRelation: "comms_templates"
            referencedColumns: ["id"]
          }
        ]
      }
      comms_styles: {
        Row: {
          can_read: string[] | null
          can_write: string[] | null
          created_at: string | null
          description: string | null
          id: number
          linked_organisation: number | null
          owner_id: string | null
          style: string | null
          updated_at: string
        }
        Insert: {
          can_read?: string[] | null
          can_write?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          linked_organisation?: number | null
          owner_id?: string | null
          style?: string | null
          updated_at?: string
        }
        Update: {
          can_read?: string[] | null
          can_write?: string[] | null
          created_at?: string | null
          description?: string | null
          id?: number
          linked_organisation?: number | null
          owner_id?: string | null
          style?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "comms_styles_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      comms_templates: {
        Row: {
          body: string
          can_read: string[] | null
          can_write: string[] | null
          created_at: string
          id: number
          linked_organisation: number
          name: string
          owner_id: string | null
          style: number | null
          text: string | null
          type: string
          updated_at: string
          variables: string[] | null
        }
        Insert: {
          body: string
          can_read?: string[] | null
          can_write?: string[] | null
          created_at?: string
          id?: number
          linked_organisation: number
          name: string
          owner_id?: string | null
          style?: number | null
          text?: string | null
          type: string
          updated_at?: string
          variables?: string[] | null
        }
        Update: {
          body?: string
          can_read?: string[] | null
          can_write?: string[] | null
          created_at?: string
          id?: number
          linked_organisation?: number
          name?: string
          owner_id?: string | null
          style?: number | null
          text?: string | null
          type?: string
          updated_at?: string
          variables?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "comms_templates_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comms_templates_style_fkey"
            columns: ["style"]
            referencedRelation: "comms_styles"
            referencedColumns: ["id"]
          }
        ]
      }
      countries: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      country: {
        Row: {
          id: number
          iso: string
          iso3: string | null
          name: string
          nicename: string
          numcode: number | null
          phonecode: number
        }
        Insert: {
          id?: never
          iso: string
          iso3?: string | null
          name: string
          nicename: string
          numcode?: number | null
          phonecode: number
        }
        Update: {
          id?: never
          iso?: string
          iso3?: string | null
          name?: string
          nicename?: string
          numcode?: number | null
          phonecode?: number
        }
        Relationships: []
      }
      debicheck_collections: {
        Row: {
          amount: number | null
          created_at: string | null
          id: number
          loan_id: string | null
          organisation: number | null
          parsed: boolean
          purchase_id: string | null
          purchase_mandate_id: string | null
          result_json: Json | null
          result_log: Json | null
          status: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          id?: number
          loan_id?: string | null
          organisation?: number | null
          parsed?: boolean
          purchase_id?: string | null
          purchase_mandate_id?: string | null
          result_json?: Json | null
          result_log?: Json | null
          status?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          id?: number
          loan_id?: string | null
          organisation?: number | null
          parsed?: boolean
          purchase_id?: string | null
          purchase_mandate_id?: string | null
          result_json?: Json | null
          result_log?: Json | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "debicheck_collections_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      debicheck_transactions: {
        Row: {
          created_at: string | null
          id: number
          organisation_id: number | null
          purchase_mandate_id: string | null
          response_type: string | null
          result_log: Json | null
          status: string | null
          transaction_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          organisation_id?: number | null
          purchase_mandate_id?: string | null
          response_type?: string | null
          result_log?: Json | null
          status?: string | null
          transaction_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          organisation_id?: number | null
          purchase_mandate_id?: string | null
          response_type?: string | null
          result_log?: Json | null
          status?: string | null
          transaction_id?: string | null
        }
        Relationships: []
      }
      digital_leads: {
        Row: {
          assigned: string
          assignment_log: Json | null
          created_at: string | null
          id: string
          linked_merchant: string | null
          linked_order: string | null
          linked_organisation_product: number
          linked_ussd_session: string | null
          lock: boolean | null
          organization_id: string | null
          ref_data: Json | null
          referral_code: string | null
          source: number
          status: Database["public"]["Enums"]["lead_status"] | null
          updated_at: string | null
        }
        Insert: {
          assigned?: string
          assignment_log?: Json | null
          created_at?: string | null
          id?: string
          linked_merchant?: string | null
          linked_order?: string | null
          linked_organisation_product: number
          linked_ussd_session?: string | null
          lock?: boolean | null
          organization_id?: string | null
          ref_data?: Json | null
          referral_code?: string | null
          source: number
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated_at?: string | null
        }
        Update: {
          assigned?: string
          assignment_log?: Json | null
          created_at?: string | null
          id?: string
          linked_merchant?: string | null
          linked_order?: string | null
          linked_organisation_product?: number
          linked_ussd_session?: string | null
          lock?: boolean | null
          organization_id?: string | null
          ref_data?: Json | null
          referral_code?: string | null
          source?: number
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "digital_leads_linked_merchant_fkey"
            columns: ["linked_merchant"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "digital_leads_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "digital_leads_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "digital_leads_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_enhanced"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "digital_leads_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "digital_leads_linked_organisation_product_fkey"
            columns: ["linked_organisation_product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "digital_leads_linked_ussd_session_fkey"
            columns: ["linked_ussd_session"]
            referencedRelation: "ussd_sessions"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "digital_leads_source_fkey"
            columns: ["source"]
            referencedRelation: "digital_sources"
            referencedColumns: ["id"]
          }
        ]
      }
      digital_sources: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      document_type: {
        Row: {
          code: string
          created_at: string | null
          id: number
          lifetime: number
          type: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          id?: number
          lifetime?: number
          type?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          id?: number
          lifetime?: number
          type?: string | null
        }
        Relationships: []
      }
      document_type_partner: {
        Row: {
          created_at: string
          id: number
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          type?: string | null
        }
        Relationships: []
      }
      employment_types: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      experian_configs: {
        Row: {
          created_at: string | null
          description: string | null
          enquirer: Json | null
          id: number
          min_credit_score: number | null
          organisation: number | null
          password: string | null
          services: Json | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          enquirer?: Json | null
          id?: number
          min_credit_score?: number | null
          organisation?: number | null
          password?: string | null
          services?: Json | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          enquirer?: Json | null
          id?: number
          min_credit_score?: number | null
          organisation?: number | null
          password?: string | null
          services?: Json | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "experian_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      external_parties: {
        Row: {
          active: boolean | null
          api_key: string | null
          api_url: string | null
          approved: boolean | null
          approved_by: string | null
          bank_account_number: number | null
          bank_account_type_id: number | null
          bank_id: number | null
          banner_url: string | null
          branch_code: number | null
          business_address: string | null
          business_contact: string | null
          business_email: string
          business_name: string
          business_postal: string | null
          can_read: string[] | null
          can_write: string[] | null
          company_reg_no: string | null
          contact_last_name: string | null
          contact_name: string | null
          country: string | null
          created_at: string | null
          description: string | null
          fax_no: string | null
          found_by: string | null
          header: string | null
          id: string
          individual: boolean
          is_owner: string | null
          kyc_trust_level: number | null
          linked_organisation: number | null
          merchant_group_id: number | null
          merchant_region_id: number | null
          organisation_id: number | null
          partner_id: number | null
          partner_type: number | null
          referer_url: string[]
          referred_by: string | null
          required_documents:
            | Database["public"]["Enums"]["partner_agent_documents"][]
            | null
          telephone_no: string | null
          tenant_id: string | null
          updated_at: string | null
          years_in_business: number | null
        }
        Insert: {
          active?: boolean | null
          api_key?: string | null
          api_url?: string | null
          approved?: boolean | null
          approved_by?: string | null
          bank_account_number?: number | null
          bank_account_type_id?: number | null
          bank_id?: number | null
          banner_url?: string | null
          branch_code?: number | null
          business_address?: string | null
          business_contact?: string | null
          business_email: string
          business_name: string
          business_postal?: string | null
          can_read?: string[] | null
          can_write?: string[] | null
          company_reg_no?: string | null
          contact_last_name?: string | null
          contact_name?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          fax_no?: string | null
          found_by?: string | null
          header?: string | null
          id?: string
          individual?: boolean
          is_owner?: string | null
          kyc_trust_level?: number | null
          linked_organisation?: number | null
          merchant_group_id?: number | null
          merchant_region_id?: number | null
          organisation_id?: number | null
          partner_id?: number | null
          partner_type?: number | null
          referer_url: string[]
          referred_by?: string | null
          required_documents?:
            | Database["public"]["Enums"]["partner_agent_documents"][]
            | null
          telephone_no?: string | null
          tenant_id?: string | null
          updated_at?: string | null
          years_in_business?: number | null
        }
        Update: {
          active?: boolean | null
          api_key?: string | null
          api_url?: string | null
          approved?: boolean | null
          approved_by?: string | null
          bank_account_number?: number | null
          bank_account_type_id?: number | null
          bank_id?: number | null
          banner_url?: string | null
          branch_code?: number | null
          business_address?: string | null
          business_contact?: string | null
          business_email?: string
          business_name?: string
          business_postal?: string | null
          can_read?: string[] | null
          can_write?: string[] | null
          company_reg_no?: string | null
          contact_last_name?: string | null
          contact_name?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          fax_no?: string | null
          found_by?: string | null
          header?: string | null
          id?: string
          individual?: boolean
          is_owner?: string | null
          kyc_trust_level?: number | null
          linked_organisation?: number | null
          merchant_group_id?: number | null
          merchant_region_id?: number | null
          organisation_id?: number | null
          partner_id?: number | null
          partner_type?: number | null
          referer_url?: string[]
          referred_by?: string | null
          required_documents?:
            | Database["public"]["Enums"]["partner_agent_documents"][]
            | null
          telephone_no?: string | null
          tenant_id?: string | null
          updated_at?: string | null
          years_in_business?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "external_parties_country_fkey"
            columns: ["country"]
            referencedRelation: "country"
            referencedColumns: ["iso"]
          },
          {
            foreignKeyName: "external_parties_is_owner_fkey"
            columns: ["is_owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_referred_by_fkey"
            columns: ["referred_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_external_parties_partner_type_fkey"
            columns: ["partner_type"]
            referencedRelation: "external_party_type"
            referencedColumns: ["id"]
          }
        ]
      }
      external_parties_branches: {
        Row: {
          bm_code: number | null
          bm_date_created: string | null
          bm_date_modified: string | null
          bm_faxnumber: string | null
          bm_isactive: boolean | null
          bm_ischecked: boolean | null
          bm_name: string | null
          bm_number: number | null
          bm_parent_id: string | null
          bm_phonenumber: string | null
          id: number
          reg_id: number | null
        }
        Insert: {
          bm_code?: number | null
          bm_date_created?: string | null
          bm_date_modified?: string | null
          bm_faxnumber?: string | null
          bm_isactive?: boolean | null
          bm_ischecked?: boolean | null
          bm_name?: string | null
          bm_number?: number | null
          bm_parent_id?: string | null
          bm_phonenumber?: string | null
          id?: number
          reg_id?: number | null
        }
        Update: {
          bm_code?: number | null
          bm_date_created?: string | null
          bm_date_modified?: string | null
          bm_faxnumber?: string | null
          bm_isactive?: boolean | null
          bm_ischecked?: boolean | null
          bm_name?: string | null
          bm_number?: number | null
          bm_parent_id?: string | null
          bm_phonenumber?: string | null
          id?: number
          reg_id?: number | null
        }
        Relationships: []
      }
      external_parties_organisation_products: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          linked_external_party: string
          linked_organisation_product: number | null
          product_type: Database["public"]["Enums"]["product_type"] | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          linked_external_party: string
          linked_organisation_product?: number | null
          product_type?: Database["public"]["Enums"]["product_type"] | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          linked_external_party?: string
          linked_organisation_product?: number | null
          product_type?: Database["public"]["Enums"]["product_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "external_parties_organisation_products_id_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_organisation_products_linked_organisation_prod"
            columns: ["linked_organisation_product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          }
        ]
      }
      external_parties_users: {
        Row: {
          comm_basis: string | null
          comm_cap: number | null
          comm_pay_to: string | null
          comm_rate: number | null
          created_at: string | null
          enabled: boolean
          id: number
          linked_external_party: string
          linked_user: string
          main_role: number | null
          mer_id: number | null
        }
        Insert: {
          comm_basis?: string | null
          comm_cap?: number | null
          comm_pay_to?: string | null
          comm_rate?: number | null
          created_at?: string | null
          enabled?: boolean
          id?: number
          linked_external_party: string
          linked_user: string
          main_role?: number | null
          mer_id?: number | null
        }
        Update: {
          comm_basis?: string | null
          comm_cap?: number | null
          comm_pay_to?: string | null
          comm_rate?: number | null
          created_at?: string | null
          enabled?: boolean
          id?: number
          linked_external_party?: string
          linked_user?: string
          main_role?: number | null
          mer_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "external_parties_users_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "external_user_views"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "profiles_view_linked"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_main_role_fkey"
            columns: ["main_role"]
            referencedRelation: "user_group_permissions"
            referencedColumns: ["id"]
          }
        ]
      }
      external_party_approval_type: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      external_party_approvals: {
        Row: {
          approval_type: number | null
          approved: boolean | null
          approved_by: string | null
          approved_date: string | null
          created_at: string
          description: string | null
          id: number
          linked_external_party: string
          required: boolean | null
        }
        Insert: {
          approval_type?: number | null
          approved?: boolean | null
          approved_by?: string | null
          approved_date?: string | null
          created_at?: string
          description?: string | null
          id?: number
          linked_external_party: string
          required?: boolean | null
        }
        Update: {
          approval_type?: number | null
          approved?: boolean | null
          approved_by?: string | null
          approved_date?: string | null
          created_at?: string
          description?: string | null
          id?: number
          linked_external_party?: string
          required?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "external_party_approvals_approval_type_fkey"
            columns: ["approval_type"]
            referencedRelation: "external_party_approval_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_approvals_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          }
        ]
      }
      external_party_documents: {
        Row: {
          approved: boolean | null
          approved_by: string | null
          approved_date: string | null
          created_at: string
          document_type: number | null
          id: number
          linked_external_party: string
          original_filename: string | null
          rejected: boolean | null
          required: boolean | null
          url: string | null
        }
        Insert: {
          approved?: boolean | null
          approved_by?: string | null
          approved_date?: string | null
          created_at?: string
          document_type?: number | null
          id?: number
          linked_external_party: string
          original_filename?: string | null
          rejected?: boolean | null
          required?: boolean | null
          url?: string | null
        }
        Update: {
          approved?: boolean | null
          approved_by?: string | null
          approved_date?: string | null
          created_at?: string
          document_type?: number | null
          id?: number
          linked_external_party?: string
          original_filename?: string | null
          rejected?: boolean | null
          required?: boolean | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "external_party_documents_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "external_user_views"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_documents_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_documents_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_documents_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "profiles_view_linked"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_documents_document_type_fkey"
            columns: ["document_type"]
            referencedRelation: "document_type_partner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_documents_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          }
        ]
      }
      external_party_notifications: {
        Row: {
          content: string | null
          created_at: string
          heading: string | null
          id: number
          linked_external_party: string
          notify_type: string | null
          read: boolean | null
          sent_by: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          heading?: string | null
          id?: number
          linked_external_party: string
          notify_type?: string | null
          read?: boolean | null
          sent_by?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          heading?: string | null
          id?: number
          linked_external_party?: string
          notify_type?: string | null
          read?: boolean | null
          sent_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "external_party_notifications_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          }
        ]
      }
      external_party_set_approval: {
        Row: {
          approval_type: number | null
          id: number
          mandatory: boolean | null
          partner_type: number
        }
        Insert: {
          approval_type?: number | null
          id?: number
          mandatory?: boolean | null
          partner_type: number
        }
        Update: {
          approval_type?: number | null
          id?: number
          mandatory?: boolean | null
          partner_type?: number
        }
        Relationships: [
          {
            foreignKeyName: "external_party_set_approval_approval_type_fkey"
            columns: ["approval_type"]
            referencedRelation: "external_party_approval_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_set_approval_partner_fkey"
            columns: ["partner_type"]
            referencedRelation: "external_party_type"
            referencedColumns: ["id"]
          }
        ]
      }
      external_party_set_docs: {
        Row: {
          document_type: number | null
          id: number
          mandatory: boolean | null
          partner_type: number | null
        }
        Insert: {
          document_type?: number | null
          id?: number
          mandatory?: boolean | null
          partner_type?: number | null
        }
        Update: {
          document_type?: number | null
          id?: number
          mandatory?: boolean | null
          partner_type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "external_party_set_docs_document_type_fkey"
            columns: ["document_type"]
            referencedRelation: "document_type_partner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_party_set_docs_partner_fkey"
            columns: ["partner_type"]
            referencedRelation: "external_party_type"
            referencedColumns: ["id"]
          }
        ]
      }
      external_party_type: {
        Row: {
          id: number
          mapped_role: number | null
          name: string | null
        }
        Insert: {
          id?: number
          mapped_role?: number | null
          name?: string | null
        }
        Update: {
          id?: number
          mapped_role?: number | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_external_party_type_mapped_role_fkey"
            columns: ["mapped_role"]
            referencedRelation: "user_group_permissions"
            referencedColumns: ["id"]
          }
        ]
      }
      file_metadata: {
        Row: {
          created_at: string | null
          document_password: string | null
          document_type_id: number | null
          editable: boolean | null
          file_name: string | null
          file_type: string | null
          id: number
          linked_user: string | null
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          created_at?: string | null
          document_password?: string | null
          document_type_id?: number | null
          editable?: boolean | null
          file_name?: string | null
          file_type?: string | null
          id?: number
          linked_user?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          created_at?: string | null
          document_password?: string | null
          document_type_id?: number | null
          editable?: boolean | null
          file_name?: string | null
          file_type?: string | null
          id?: number
          linked_user?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "file_metadata_document_type_id_fkey"
            columns: ["document_type_id"]
            referencedRelation: "document_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "file_metadata_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      finpay_clients: {
        Row: {
          country_identifier: string
          created_at: string | null
          id: string
          phone: string
        }
        Insert: {
          country_identifier?: string
          created_at?: string | null
          id: string
          phone: string
        }
        Update: {
          country_identifier?: string
          created_at?: string | null
          id?: string
          phone?: string
        }
        Relationships: [
          {
            foreignKeyName: "finpay_clients_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      finpay_tenants: {
        Row: {
          api_key: string | null
          created_at: string | null
          header: string | null
          id: number
          tenant_id: string | null
          url: string | null
        }
        Insert: {
          api_key?: string | null
          created_at?: string | null
          header?: string | null
          id?: number
          tenant_id?: string | null
          url?: string | null
        }
        Update: {
          api_key?: string | null
          created_at?: string | null
          header?: string | null
          id?: number
          tenant_id?: string | null
          url?: string | null
        }
        Relationships: []
      }
      finpay_transactions: {
        Row: {
          created_at: string
          id: number
          is_parsed: boolean | null
          organisation: number | null
          reference: string | null
          request_json: Json | null
          response_json: Json | null
          tenant_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_parsed?: boolean | null
          organisation?: number | null
          reference?: string | null
          request_json?: Json | null
          response_json?: Json | null
          tenant_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_parsed?: boolean | null
          organisation?: number | null
          reference?: string | null
          request_json?: Json | null
          response_json?: Json | null
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "finpay_transactions_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      guest_orders: {
        Row: {
          created_at: string
          id: string
          last_known_step: number | null
          organisation_id: string | null
          ref_data: Json | null
          submitted: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          last_known_step?: number | null
          organisation_id?: string | null
          ref_data?: Json | null
          submitted?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          last_known_step?: number | null
          organisation_id?: string | null
          ref_data?: Json | null
          submitted?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      guest_profiles: {
        Row: {
          bank: string | null
          consentStates: Json | null
          created_at: string | null
          employerName: string | null
          employmentType: string | null
          grossSalary: number | null
          iDNumber: string
          isVerified: boolean | null
          loanAmount: number | null
          mobileNumber: string | null
          name: string | null
          netSalary: number | null
          organisation_id: number | null
          otp: string | null
          salaryFrequency: string | null
          surname: string | null
          term: number | null
        }
        Insert: {
          bank?: string | null
          consentStates?: Json | null
          created_at?: string | null
          employerName?: string | null
          employmentType?: string | null
          grossSalary?: number | null
          iDNumber: string
          isVerified?: boolean | null
          loanAmount?: number | null
          mobileNumber?: string | null
          name?: string | null
          netSalary?: number | null
          organisation_id?: number | null
          otp?: string | null
          salaryFrequency?: string | null
          surname?: string | null
          term?: number | null
        }
        Update: {
          bank?: string | null
          consentStates?: Json | null
          created_at?: string | null
          employerName?: string | null
          employmentType?: string | null
          grossSalary?: number | null
          iDNumber?: string
          isVerified?: boolean | null
          loanAmount?: number | null
          mobileNumber?: string | null
          name?: string | null
          netSalary?: number | null
          organisation_id?: number | null
          otp?: string | null
          salaryFrequency?: string | null
          surname?: string | null
          term?: number | null
        }
        Relationships: []
      }
      intecon_clients: {
        Row: {
          country_identifier: string | null
          created_at: string | null
          email: string | null
          external_id: string
          id: string
          linked_client: string | null
          updated_at: string
        }
        Insert: {
          country_identifier?: string | null
          created_at?: string | null
          email?: string | null
          external_id: string
          id?: string
          linked_client?: string | null
          updated_at?: string
        }
        Update: {
          country_identifier?: string | null
          created_at?: string | null
          email?: string | null
          external_id?: string
          id?: string
          linked_client?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "intecon_clients_linked_client_fkey"
            columns: ["linked_client"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      intecon_configs: {
        Row: {
          branch: string | null
          created_at: string | null
          credit_life_acc: string | null
          employer: string | null
          id: number
          next_password: string | null
          next_username: string | null
          org_cd: string | null
          organisation: number | null
          password: string | null
          payment_type_ref: number | null
          userId: string | null
        }
        Insert: {
          branch?: string | null
          created_at?: string | null
          credit_life_acc?: string | null
          employer?: string | null
          id?: number
          next_password?: string | null
          next_username?: string | null
          org_cd?: string | null
          organisation?: number | null
          password?: string | null
          payment_type_ref?: number | null
          userId?: string | null
        }
        Update: {
          branch?: string | null
          created_at?: string | null
          credit_life_acc?: string | null
          employer?: string | null
          id?: number
          next_password?: string | null
          next_username?: string | null
          org_cd?: string | null
          organisation?: number | null
          password?: string | null
          payment_type_ref?: number | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "intecon_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      interest_calculation_period: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      lead_stage: {
        Row: {
          id: number
          name: string | null
          position: number | null
        }
        Insert: {
          id?: never
          name?: string | null
          position?: number | null
        }
        Update: {
          id?: never
          name?: string | null
          position?: number | null
        }
        Relationships: []
      }
      locations: {
        Row: {
          city: string | null
          country: string | null
          created_at: string
          id: string
          postal_code: string | null
          surburb: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          postal_code?: string | null
          surburb?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          postal_code?: string | null
          surburb?: string | null
        }
        Relationships: []
      }
      managed_codes_lookup: {
        Row: {
          created_at: string | null
          id: number
          lookup_type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          lookup_type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          lookup_type?: string | null
        }
        Relationships: []
      }
      merchant_groups: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          id: number
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      merchant_regions: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          id: number
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      merchants: {
        Row: {
          BankAccountNumber: string | null
          BankAccountType: number | null
          BankBranchCode: number | null
          BankBranchName: string | null
          BankId: number | null
          Cell: string | null
          Commission: number | null
          CommissionCap: number | null
          CompanyRegistration: string | null
          ContactName: string | null
          ContactPhone: string | null
          ContactPosition: string | null
          Enabled: number | null
          FaxNumber: string | null
          id: number
          MerchantGroupID: number | null
          MerchantRegionID: number | null
          Name: string | null
          NameOfAccountHolder: string | null
          OrganisationId: number | null
          PartnerType: number | null
          PhoneNumber: string | null
          ProductType: number | null
          years_in_business: number | null
        }
        Insert: {
          BankAccountNumber?: string | null
          BankAccountType?: number | null
          BankBranchCode?: number | null
          BankBranchName?: string | null
          BankId?: number | null
          Cell?: string | null
          Commission?: number | null
          CommissionCap?: number | null
          CompanyRegistration?: string | null
          ContactName?: string | null
          ContactPhone?: string | null
          ContactPosition?: string | null
          Enabled?: number | null
          FaxNumber?: string | null
          id?: number
          MerchantGroupID?: number | null
          MerchantRegionID?: number | null
          Name?: string | null
          NameOfAccountHolder?: string | null
          OrganisationId?: number | null
          PartnerType?: number | null
          PhoneNumber?: string | null
          ProductType?: number | null
          years_in_business?: number | null
        }
        Update: {
          BankAccountNumber?: string | null
          BankAccountType?: number | null
          BankBranchCode?: number | null
          BankBranchName?: string | null
          BankId?: number | null
          Cell?: string | null
          Commission?: number | null
          CommissionCap?: number | null
          CompanyRegistration?: string | null
          ContactName?: string | null
          ContactPhone?: string | null
          ContactPosition?: string | null
          Enabled?: number | null
          FaxNumber?: string | null
          id?: number
          MerchantGroupID?: number | null
          MerchantRegionID?: number | null
          Name?: string | null
          NameOfAccountHolder?: string | null
          OrganisationId?: number | null
          PartnerType?: number | null
          PhoneNumber?: string | null
          ProductType?: number | null
          years_in_business?: number | null
        }
        Relationships: []
      }
      middleware_logs: {
        Row: {
          created_at: string | null
          id: number
          logs: string | null
          service: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          logs?: string | null
          service?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          logs?: string | null
          service?: string | null
        }
        Relationships: []
      }
      mintos_facade_request_response: {
        Row: {
          created_by: number
          facadeid: number
          id: number
          organisation_id: number
          request_body: string | null
          request_method: string
          request_sent_at: string
          request_url: string
          response_message: string | null
          response_received_at: string
          response_status_code: number
          response_status_code_desc: string
          updated_at: string
        }
        Insert: {
          created_by: number
          facadeid: number
          id?: never
          organisation_id: number
          request_body?: string | null
          request_method: string
          request_sent_at: string
          request_url: string
          response_message?: string | null
          response_received_at: string
          response_status_code: number
          response_status_code_desc: string
          updated_at: string
        }
        Update: {
          created_by?: number
          facadeid?: number
          id?: never
          organisation_id?: number
          request_body?: string | null
          request_method?: string
          request_sent_at?: string
          request_url?: string
          response_message?: string | null
          response_received_at?: string
          response_status_code?: number
          response_status_code_desc?: string
          updated_at?: string
        }
        Relationships: []
      }
      mintos_interest_rate_term: {
        Row: {
          id: number
          interest_percentage: number
          organisation_id: number
          term: number
        }
        Insert: {
          id?: never
          interest_percentage: number
          organisation_id: number
          term: number
        }
        Update: {
          id?: never
          interest_percentage?: number
          organisation_id?: number
          term?: number
        }
        Relationships: []
      }
      mintos_loan: {
        Row: {
          created_by: number
          currency: string
          exchange_rate: number
          external_loan_id: number
          id: number
          interest_rate: number
          loan_id: number
          market_id: number
          mintos_id: string | null
          mintos_loan_state: string | null
          mintos_payment_state: string | null
          organisation_id: number
          prepaid_term: number
          rebuy_purpose: number | null
          remaining_principal: number
          remaining_term: number
          updated_at: string
        }
        Insert: {
          created_by: number
          currency: string
          exchange_rate: number
          external_loan_id: number
          id?: never
          interest_rate: number
          loan_id: number
          market_id: number
          mintos_id?: string | null
          mintos_loan_state?: string | null
          mintos_payment_state?: string | null
          organisation_id: number
          prepaid_term: number
          rebuy_purpose?: number | null
          remaining_principal: number
          remaining_term: number
          updated_at: string
        }
        Update: {
          created_by?: number
          currency?: string
          exchange_rate?: number
          external_loan_id?: number
          id?: never
          interest_rate?: number
          loan_id?: number
          market_id?: number
          mintos_id?: string | null
          mintos_loan_state?: string | null
          mintos_payment_state?: string | null
          organisation_id?: number
          prepaid_term?: number
          rebuy_purpose?: number | null
          remaining_principal?: number
          remaining_term?: number
          updated_at?: string
        }
        Relationships: []
      }
      mintos_loan_state_history: {
        Row: {
          created_by: number
          external_loan_id: number
          loan_id: number
          organisation_id: number
          state: number
          updated_at: string
        }
        Insert: {
          created_by: number
          external_loan_id: number
          loan_id: number
          organisation_id?: never
          state: number
          updated_at: string
        }
        Update: {
          created_by?: number
          external_loan_id?: number
          loan_id?: number
          organisation_id?: never
          state?: number
          updated_at?: string
        }
        Relationships: []
      }
      mintos_market: {
        Row: {
          balance_percentage: number
          base_url: string
          currency_code: string
          exchange_rate: number
          id: number
          market_type: number | null
          organisation_id: number
        }
        Insert: {
          balance_percentage: number
          base_url: string
          currency_code: string
          exchange_rate: number
          id?: never
          market_type?: number | null
          organisation_id: number
        }
        Update: {
          balance_percentage?: number
          base_url?: string
          currency_code?: string
          exchange_rate?: number
          id?: never
          market_type?: number | null
          organisation_id?: number
        }
        Relationships: []
      }
      mintos_payment: {
        Row: {
          created_by: number
          external_loan_id: number
          id: number
          investor_interest: number
          investor_principal: number
          loan_id: number
          mintos_schedule_id: number
          organisation_id: number
          remaining_investor_interest: number
          remaining_investor_principal: number
          response_message: string | null
          sequence_number: number
          state: number
          transaction_date: string
          updated_at: string
        }
        Insert: {
          created_by: number
          external_loan_id: number
          id?: never
          investor_interest: number
          investor_principal: number
          loan_id: number
          mintos_schedule_id: number
          organisation_id: number
          remaining_investor_interest: number
          remaining_investor_principal: number
          response_message?: string | null
          sequence_number: number
          state: number
          transaction_date: string
          updated_at: string
        }
        Update: {
          created_by?: number
          external_loan_id?: number
          id?: never
          investor_interest?: number
          investor_principal?: number
          loan_id?: number
          mintos_schedule_id?: number
          organisation_id?: number
          remaining_investor_interest?: number
          remaining_investor_principal?: number
          response_message?: string | null
          sequence_number?: number
          state?: number
          transaction_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      mintos_schedule: {
        Row: {
          id: number
          interest: number
          mintos_loan_id: number
          principal: number
          provider_status: string | null
          remaining_principal: number
          schedule_date: string
          sequence_number: number
        }
        Insert: {
          id?: never
          interest: number
          mintos_loan_id: number
          principal: number
          provider_status?: string | null
          remaining_principal: number
          schedule_date: string
          sequence_number: number
        }
        Update: {
          id?: never
          interest?: number
          mintos_loan_id?: number
          principal?: number
          provider_status?: string | null
          remaining_principal?: number
          schedule_date?: string
          sequence_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "mintos_schedule_mintos_loan_id_fkey"
            columns: ["mintos_loan_id"]
            referencedRelation: "mintos_loan"
            referencedColumns: ["id"]
          }
        ]
      }
      order_documents: {
        Row: {
          created_at: string | null
          external_source: string | null
          external_verification: boolean
          id: number
          internally_verified: boolean | null
          linked_order: string | null
          pass: string | null
          type: number | null
          uploaded_at: string | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          external_source?: string | null
          external_verification?: boolean
          id?: number
          internally_verified?: boolean | null
          linked_order?: string | null
          pass?: string | null
          type?: number | null
          uploaded_at?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          external_source?: string | null
          external_verification?: boolean
          id?: number
          internally_verified?: boolean | null
          linked_order?: string | null
          pass?: string | null
          type?: number | null
          uploaded_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_documents_external_source_fkey"
            columns: ["external_source"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_documents_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_documents_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_documents_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_enhanced"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_documents_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_documents_type_fkey"
            columns: ["type"]
            referencedRelation: "document_type"
            referencedColumns: ["id"]
          }
        ]
      }
      order_status: {
        Row: {
          description: string | null
          id: number
          name: string
        }
        Insert: {
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          backoffice_location: string | null
          bulk_id: string | null
          client_id: string | null
          client_status_description: string | null
          consents: Json | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          failReturnUrl: string | null
          failureWebhook: string | null
          id: string
          is_contract: boolean | null
          is_reoffer: boolean | null
          last_known_step: number | null
          linked_backoffice_id: string | null
          linked_fineract_id: number | null
          linked_merchant: string | null
          linked_organisation_product: number | null
          order_id: string | null
          order_type: Database["public"]["Enums"]["order_type"]
          organisation: number | null
          organisation_id: string | null
          parent_order: string | null
          preflight_ref_data: Json | null
          products: Json[] | null
          ref: number
          ref_data: Json | null
          request_data: Json | null
          response_data: Json | null
          status: number
          submitted_at: string | null
          submitted_to_backoffice: boolean | null
          successReturnUrl: string | null
          successWebhook: string | null
          total: number | null
          updated_at: string
          validations: Json | null
        }
        Insert: {
          backoffice_location?: string | null
          bulk_id?: string | null
          client_id?: string | null
          client_status_description?: string | null
          consents?: Json | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          failReturnUrl?: string | null
          failureWebhook?: string | null
          id?: string
          is_contract?: boolean | null
          is_reoffer?: boolean | null
          last_known_step?: number | null
          linked_backoffice_id?: string | null
          linked_fineract_id?: number | null
          linked_merchant?: string | null
          linked_organisation_product?: number | null
          order_id?: string | null
          order_type?: Database["public"]["Enums"]["order_type"]
          organisation?: number | null
          organisation_id?: string | null
          parent_order?: string | null
          preflight_ref_data?: Json | null
          products?: Json[] | null
          ref?: number
          ref_data?: Json | null
          request_data?: Json | null
          response_data?: Json | null
          status?: number
          submitted_at?: string | null
          submitted_to_backoffice?: boolean | null
          successReturnUrl?: string | null
          successWebhook?: string | null
          total?: number | null
          updated_at?: string
          validations?: Json | null
        }
        Update: {
          backoffice_location?: string | null
          bulk_id?: string | null
          client_id?: string | null
          client_status_description?: string | null
          consents?: Json | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          failReturnUrl?: string | null
          failureWebhook?: string | null
          id?: string
          is_contract?: boolean | null
          is_reoffer?: boolean | null
          last_known_step?: number | null
          linked_backoffice_id?: string | null
          linked_fineract_id?: number | null
          linked_merchant?: string | null
          linked_organisation_product?: number | null
          order_id?: string | null
          order_type?: Database["public"]["Enums"]["order_type"]
          organisation?: number | null
          organisation_id?: string | null
          parent_order?: string | null
          preflight_ref_data?: Json | null
          products?: Json[] | null
          ref?: number
          ref_data?: Json | null
          request_data?: Json | null
          response_data?: Json | null
          status?: number
          submitted_at?: string | null
          submitted_to_backoffice?: boolean | null
          successReturnUrl?: string | null
          successWebhook?: string | null
          total?: number | null
          updated_at?: string
          validations?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_bulk_id_fkey"
            columns: ["bulk_id"]
            referencedRelation: "batch_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_linked_merchant_fkey"
            columns: ["linked_merchant"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_linked_organisation_product_fkey"
            columns: ["linked_organisation_product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_status_fkey"
            columns: ["status"]
            referencedRelation: "order_status"
            referencedColumns: ["id"]
          }
        ]
      }
      organisation_branches: {
        Row: {
          branch_name: string
          created_at: string
          fineract_branch_id: number | null
          id: number
          linked_external_party: string | null
          loan_origination_branch_agent_id: number | null
          loan_origination_branch_id: number
          organisation: number | null
        }
        Insert: {
          branch_name: string
          created_at?: string
          fineract_branch_id?: number | null
          id?: number
          linked_external_party?: string | null
          loan_origination_branch_agent_id?: number | null
          loan_origination_branch_id: number
          organisation?: number | null
        }
        Update: {
          branch_name?: string
          created_at?: string
          fineract_branch_id?: number | null
          id?: number
          linked_external_party?: string | null
          loan_origination_branch_agent_id?: number | null
          loan_origination_branch_id?: number
          organisation?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "organisation_branches_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_branches_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      organisation_configs: {
        Row: {
          backoffice_token: string | null
          backoffice_url: string | null
          base_url: string | null
          can_read: string[] | null
          can_write: string[] | null
          CompanyAddress1: string | null
          CompanyAddress2: string | null
          CompanyAddress3: string | null
          CompanyAddress4: string | null
          CompanyAddress5: string | null
          CompanyContactNumber: string | null
          CompanyEmailAddress: string | null
          CompanyPostalAddressLong: string | null
          CompanyRegistrationNumber: string | null
          CompanyWebSiteUrl: string | null
          country: string
          created_at: string
          CreditRegistrationNumber: string | null
          default_account: string | null
          default_client_id: number | null
          description: string | null
          id: number
          organisation_id: string | null
          organisation_name: string
          owner_id: string | null
          password: string | null
          sms_gateway: string | null
          tenant_id: string
          updated_at: string | null
          username: string | null
          "VAT Registration Number": string | null
        }
        Insert: {
          backoffice_token?: string | null
          backoffice_url?: string | null
          base_url?: string | null
          can_read?: string[] | null
          can_write?: string[] | null
          CompanyAddress1?: string | null
          CompanyAddress2?: string | null
          CompanyAddress3?: string | null
          CompanyAddress4?: string | null
          CompanyAddress5?: string | null
          CompanyContactNumber?: string | null
          CompanyEmailAddress?: string | null
          CompanyPostalAddressLong?: string | null
          CompanyRegistrationNumber?: string | null
          CompanyWebSiteUrl?: string | null
          country: string
          created_at?: string
          CreditRegistrationNumber?: string | null
          default_account?: string | null
          default_client_id?: number | null
          description?: string | null
          id?: number
          organisation_id?: string | null
          organisation_name: string
          owner_id?: string | null
          password?: string | null
          sms_gateway?: string | null
          tenant_id: string
          updated_at?: string | null
          username?: string | null
          "VAT Registration Number"?: string | null
        }
        Update: {
          backoffice_token?: string | null
          backoffice_url?: string | null
          base_url?: string | null
          can_read?: string[] | null
          can_write?: string[] | null
          CompanyAddress1?: string | null
          CompanyAddress2?: string | null
          CompanyAddress3?: string | null
          CompanyAddress4?: string | null
          CompanyAddress5?: string | null
          CompanyContactNumber?: string | null
          CompanyEmailAddress?: string | null
          CompanyPostalAddressLong?: string | null
          CompanyRegistrationNumber?: string | null
          CompanyWebSiteUrl?: string | null
          country?: string
          created_at?: string
          CreditRegistrationNumber?: string | null
          default_account?: string | null
          default_client_id?: number | null
          description?: string | null
          id?: number
          organisation_id?: string | null
          organisation_name?: string
          owner_id?: string | null
          password?: string | null
          sms_gateway?: string | null
          tenant_id?: string
          updated_at?: string | null
          username?: string | null
          "VAT Registration Number"?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organisation_configs_country_fkey"
            columns: ["country"]
            referencedRelation: "country"
            referencedColumns: ["iso"]
          }
        ]
      }
      organisation_managed_codes: {
        Row: {
          created_at: string | null
          fineract_ref: number | null
          id: number
          lookup_type: number | null
          name: string | null
          organisation_product: number | null
        }
        Insert: {
          created_at?: string | null
          fineract_ref?: number | null
          id?: number
          lookup_type?: number | null
          name?: string | null
          organisation_product?: number | null
        }
        Update: {
          created_at?: string | null
          fineract_ref?: number | null
          id?: number
          lookup_type?: number | null
          name?: string | null
          organisation_product?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "organisation_managed_codes_lookup_type_fkey"
            columns: ["lookup_type"]
            referencedRelation: "managed_codes_lookup"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_managed_codes_organisation_product_fkey"
            columns: ["organisation_product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          }
        ]
      }
      organisation_products: {
        Row: {
          application_workflow: Json | null
          backoffice_product_ref: string | null
          capitalised_charges: boolean
          charge_config: Json | null
          country: string | null
          created_at: string | null
          description: string | null
          fineract_prod_ref: number | null
          id: number
          instalment_lookup: Json | null
          interest_calculation_period_type: number | null
          interest_calculation_type: number | null
          interest_rate: number | null
          name: string | null
          organisation: number
          partner_available: boolean | null
          payment_type_config: Json | null
          product: number
          quick_check_workflow: Json | null
          source_account: string | null
        }
        Insert: {
          application_workflow?: Json | null
          backoffice_product_ref?: string | null
          capitalised_charges?: boolean
          charge_config?: Json | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          fineract_prod_ref?: number | null
          id?: number
          instalment_lookup?: Json | null
          interest_calculation_period_type?: number | null
          interest_calculation_type?: number | null
          interest_rate?: number | null
          name?: string | null
          organisation: number
          partner_available?: boolean | null
          payment_type_config?: Json | null
          product: number
          quick_check_workflow?: Json | null
          source_account?: string | null
        }
        Update: {
          application_workflow?: Json | null
          backoffice_product_ref?: string | null
          capitalised_charges?: boolean
          charge_config?: Json | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          fineract_prod_ref?: number | null
          id?: number
          instalment_lookup?: Json | null
          interest_calculation_period_type?: number | null
          interest_calculation_type?: number | null
          interest_rate?: number | null
          name?: string | null
          organisation?: number
          partner_available?: boolean | null
          payment_type_config?: Json | null
          product?: number
          quick_check_workflow?: Json | null
          source_account?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organisation_products_interest_calculation_period_type_fkey"
            columns: ["interest_calculation_period_type"]
            referencedRelation: "interest_calculation_period"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_products_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_products_product_fkey"
            columns: ["product"]
            referencedRelation: "product_orgs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_products_product_fkey"
            columns: ["product"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      p2p_market_configs: {
        Row: {
          access_key: string | null
          created_at: string | null
          id: string
          organisation_id: number
          p2p_market_id: string | null
          user: string | null
        }
        Insert: {
          access_key?: string | null
          created_at?: string | null
          id?: string
          organisation_id: number
          p2p_market_id?: string | null
          user?: string | null
        }
        Update: {
          access_key?: string | null
          created_at?: string | null
          id?: string
          organisation_id?: number
          p2p_market_id?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "p2p_market_configs_organisation_id_fkey"
            columns: ["organisation_id"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "p2p_market_configs_p2p_market_id_fkey"
            columns: ["p2p_market_id"]
            referencedRelation: "p2p_markets"
            referencedColumns: ["id"]
          }
        ]
      }
      p2p_market_loan: {
        Row: {
          created_at: string | null
          created_by: number | null
          external_loan_id: string | null
          id: string
          loan_id: string | null
          p2p_market_loan_tranche_id: string | null
          response: Json | null
          status: Database["public"]["Enums"]["p2p_market_loan_status"] | null
          take_on_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: number | null
          external_loan_id?: string | null
          id?: string
          loan_id?: string | null
          p2p_market_loan_tranche_id?: string | null
          response?: Json | null
          status?: Database["public"]["Enums"]["p2p_market_loan_status"] | null
          take_on_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: number | null
          external_loan_id?: string | null
          id?: string
          loan_id?: string | null
          p2p_market_loan_tranche_id?: string | null
          response?: Json | null
          status?: Database["public"]["Enums"]["p2p_market_loan_status"] | null
          take_on_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "p2p_market_loan_p2p_market_loan_tranche_id_fkey"
            columns: ["p2p_market_loan_tranche_id"]
            referencedRelation: "p2p_market_loan_tranche"
            referencedColumns: ["id"]
          }
        ]
      }
      p2p_market_loan_schedules: {
        Row: {
          created_at: string | null
          id: string
          interest: number | null
          p2p_market_loan_id: string | null
          principal: number | null
          remaining_principle: number | null
          scheduled_date: string | null
          sequence: number | null
          status:
            | Database["public"]["Enums"]["p2p_market_loan_schedule_status"]
            | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          interest?: number | null
          p2p_market_loan_id?: string | null
          principal?: number | null
          remaining_principle?: number | null
          scheduled_date?: string | null
          sequence?: number | null
          status?:
            | Database["public"]["Enums"]["p2p_market_loan_schedule_status"]
            | null
        }
        Update: {
          created_at?: string | null
          id?: string
          interest?: number | null
          p2p_market_loan_id?: string | null
          principal?: number | null
          remaining_principle?: number | null
          scheduled_date?: string | null
          sequence?: number | null
          status?:
            | Database["public"]["Enums"]["p2p_market_loan_schedule_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "p2p_market_loan_schedules_p2p_market_loan_id_fkey"
            columns: ["p2p_market_loan_id"]
            referencedRelation: "p2p_market_loan"
            referencedColumns: ["id"]
          }
        ]
      }
      p2p_market_loan_tranche: {
        Row: {
          created_at: string | null
          created_by: number
          exchange_rate: number | null
          id: string
          listing_interest: number | null
          organisation_id: number
          p2p_market_id: string | null
          response: Json | null
          total: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string | null
          created_by: number
          exchange_rate?: number | null
          id?: string
          listing_interest?: number | null
          organisation_id: number
          p2p_market_id?: string | null
          response?: Json | null
          total?: number | null
          updated_at: string
        }
        Update: {
          created_at?: string | null
          created_by?: number
          exchange_rate?: number | null
          id?: string
          listing_interest?: number | null
          organisation_id?: number
          p2p_market_id?: string | null
          response?: Json | null
          total?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "p2p_market_loan_tranche_organisation_id_fkey"
            columns: ["organisation_id"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "p2p_market_loan_tranche_p2p_market_id_fkey"
            columns: ["p2p_market_id"]
            referencedRelation: "p2p_markets"
            referencedColumns: ["id"]
          }
        ]
      }
      p2p_market_scheduled_job_tasks: {
        Row: {
          created_at: string
          id: string
          p2p_market_loan_id: string | null
          p2p_market_scheduled_job_id: string | null
          request: Json | null
          response: Json | null
          status:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_status"]
            | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          p2p_market_loan_id?: string | null
          p2p_market_scheduled_job_id?: string | null
          request?: Json | null
          response?: Json | null
          status?:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_status"]
            | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          p2p_market_loan_id?: string | null
          p2p_market_scheduled_job_id?: string | null
          request?: Json | null
          response?: Json | null
          status?:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_status"]
            | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "p2p_market_scheduled_job_tasks_p2p_market_loan_id_fkey"
            columns: ["p2p_market_loan_id"]
            referencedRelation: "p2p_market_loan"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "p2p_market_scheduled_job_tasks_p2p_market_scheduled_job_id_fkey"
            columns: ["p2p_market_scheduled_job_id"]
            referencedRelation: "p2p_market_scheduled_jobs"
            referencedColumns: ["id"]
          }
        ]
      }
      p2p_market_scheduled_jobs: {
        Row: {
          created_at: string
          id: string
          organisation_id: number | null
          p2p_market_id: string | null
          ref_data: Json | null
          status:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_status"]
            | null
          type:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_type"]
            | null
        }
        Insert: {
          created_at?: string
          id?: string
          organisation_id?: number | null
          p2p_market_id?: string | null
          ref_data?: Json | null
          status?:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_status"]
            | null
          type?:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_type"]
            | null
        }
        Update: {
          created_at?: string
          id?: string
          organisation_id?: number | null
          p2p_market_id?: string | null
          ref_data?: Json | null
          status?:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_status"]
            | null
          type?:
            | Database["public"]["Enums"]["p2p_market_scheduled_job_type"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "p2p_market_scheduled_jobs_organisation_id_fkey"
            columns: ["organisation_id"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "p2p_market_scheduled_jobs_p2p_market_id_fkey"
            columns: ["p2p_market_id"]
            referencedRelation: "p2p_markets"
            referencedColumns: ["id"]
          }
        ]
      }
      p2p_markets: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      pos_order_details: {
        Row: {
          color: string | null
          created_at: string
          id: number
          main_image: string | null
          max: number | null
          name: string | null
          order_id: string | null
          qty: number | null
          selling_price: number | null
          size: string | null
          user_id: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: number
          main_image?: string | null
          max?: number | null
          name?: string | null
          order_id?: string | null
          qty?: number | null
          selling_price?: number | null
          size?: string | null
          user_id?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: number
          main_image?: string | null
          max?: number | null
          name?: string | null
          order_id?: string | null
          qty?: number | null
          selling_price?: number | null
          size?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pos_order_details_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pos_order_details_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pos_order_details_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders_enhanced"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pos_order_details_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders_view"
            referencedColumns: ["id"]
          }
        ]
      }
      pos_product_categories: {
        Row: {
          created_at: string
          id: number
          name: string
          sub_types: string[] | null
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          sub_types?: string[] | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          sub_types?: string[] | null
        }
        Relationships: []
      }
      pos_products: {
        Row: {
          brand: string | null
          category: number | null
          color: Json | null
          created_at: string
          description: string | null
          id: number
          location: string | null
          name: string | null
          on_promotion: boolean | null
          partner: string | null
          purchase_price: number | null
          sale_price: number | null
          size: Json | null
        }
        Insert: {
          brand?: string | null
          category?: number | null
          color?: Json | null
          created_at?: string
          description?: string | null
          id?: number
          location?: string | null
          name?: string | null
          on_promotion?: boolean | null
          partner?: string | null
          purchase_price?: number | null
          sale_price?: number | null
          size?: Json | null
        }
        Update: {
          brand?: string | null
          category?: number | null
          color?: Json | null
          created_at?: string
          description?: string | null
          id?: number
          location?: string | null
          name?: string | null
          on_promotion?: boolean | null
          partner?: string | null
          purchase_price?: number | null
          sale_price?: number | null
          size?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "pos_products_partner_fkey"
            columns: ["partner"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          }
        ]
      }
      pos_products_images: {
        Row: {
          created_at: string
          id: number
          linked_product: number | null
          type: number | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          linked_product?: number | null
          type?: number | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          linked_product?: number | null
          type?: number | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pos_products_images_linked_product_fkey"
            columns: ["linked_product"]
            referencedRelation: "pos_products"
            referencedColumns: ["id"]
          }
        ]
      }
      pos_shop_setting: {
        Row: {
          address: string | null
          category_list: string | null
          created_at: string
          description: string | null
          email: string | null
          id: number
          link: string | null
          linked_external_party: string | null
          main_banner_url: string | null
          products_banner_url: string | null
          shop_name: string | null
          shop_phone: string | null
        }
        Insert: {
          address?: string | null
          category_list?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          id?: number
          link?: string | null
          linked_external_party?: string | null
          main_banner_url?: string | null
          products_banner_url?: string | null
          shop_name?: string | null
          shop_phone?: string | null
        }
        Update: {
          address?: string | null
          category_list?: string | null
          created_at?: string
          description?: string | null
          email?: string | null
          id?: number
          link?: string | null
          linked_external_party?: string | null
          main_banner_url?: string | null
          products_banner_url?: string | null
          shop_name?: string | null
          shop_phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pos_shop_setting_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          }
        ]
      }
      pre_agreement_logs: {
        Row: {
          accepted_at: string | null
          accepted_by: string | null
          client_accepted: boolean | null
          created_at: string | null
          created_by: string | null
          id: string
          linked_order: string | null
          linked_organisation: number | null
          linked_pre_agreement_template: string | null
          otp: string | null
          otp_expiry: string | null
          otp_phone_number: string | null
          template: string | null
          updated_at: string | null
        }
        Insert: {
          accepted_at?: string | null
          accepted_by?: string | null
          client_accepted?: boolean | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          linked_order?: string | null
          linked_organisation?: number | null
          linked_pre_agreement_template?: string | null
          otp?: string | null
          otp_expiry?: string | null
          otp_phone_number?: string | null
          template?: string | null
          updated_at?: string | null
        }
        Update: {
          accepted_at?: string | null
          accepted_by?: string | null
          client_accepted?: boolean | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          linked_order?: string | null
          linked_organisation?: number | null
          linked_pre_agreement_template?: string | null
          otp?: string | null
          otp_expiry?: string | null
          otp_phone_number?: string | null
          template?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pre_agreement_logs_accepted_by_fkey"
            columns: ["accepted_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_logs_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_enhanced"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_logs_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_logs_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_logs_linked_pre_agreement_template_fkey"
            columns: ["linked_pre_agreement_template"]
            referencedRelation: "pre_agreement_templates"
            referencedColumns: ["id"]
          }
        ]
      }
      pre_agreement_styles: {
        Row: {
          created_at: string | null
          id: number
          linked_organisation: number | null
          style: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          linked_organisation?: number | null
          style?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          linked_organisation?: number | null
          style?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pre_agreement_styles_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      pre_agreement_templates: {
        Row: {
          body: string | null
          created_at: string | null
          id: string
          linked_organisation: number | null
          name: string | null
          styles: number | null
          type: string | null
          variables: Json | null
        }
        Insert: {
          body?: string | null
          created_at?: string | null
          id?: string
          linked_organisation?: number | null
          name?: string | null
          styles?: number | null
          type?: string | null
          variables?: Json | null
        }
        Update: {
          body?: string | null
          created_at?: string | null
          id?: string
          linked_organisation?: number | null
          name?: string | null
          styles?: number | null
          type?: string | null
          variables?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "pre_agreement_templates_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pre_agreement_templates_styles_fkey"
            columns: ["styles"]
            referencedRelation: "pre_agreement_styles"
            referencedColumns: ["id"]
          }
        ]
      }
      product_document_setup: {
        Row: {
          document_type: number | null
          id: number
          mandatory: boolean | null
          product: number | null
        }
        Insert: {
          document_type?: number | null
          id?: number
          mandatory?: boolean | null
          product?: number | null
        }
        Update: {
          document_type?: number | null
          id?: number
          mandatory?: boolean | null
          product?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_document_setup_document_type_fkey"
            columns: ["document_type"]
            referencedRelation: "document_type_partner"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_document_setup_product_fkey"
            columns: ["product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string
          product_code: string
          quick_check_workflow: Json | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          product_code?: string
          quick_check_workflow?: Json | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          product_code?: string
          quick_check_workflow?: Json | null
        }
        Relationships: []
      }
      products_applications: {
        Row: {
          approved: boolean | null
          approved_by: string | null
          approved_date: string | null
          created_at: string
          id: number
          linked_external_party: string | null
          new_partner: boolean | null
          notes: string | null
          product: number | null
          status: boolean | null
        }
        Insert: {
          approved?: boolean | null
          approved_by?: string | null
          approved_date?: string | null
          created_at?: string
          id?: number
          linked_external_party?: string | null
          new_partner?: boolean | null
          notes?: string | null
          product?: number | null
          status?: boolean | null
        }
        Update: {
          approved?: boolean | null
          approved_by?: string | null
          approved_date?: string | null
          created_at?: string
          id?: number
          linked_external_party?: string | null
          new_partner?: boolean | null
          notes?: string | null
          product?: number | null
          status?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "products_applications_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "external_user_views"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_applications_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_applications_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_applications_approved_by_fkey"
            columns: ["approved_by"]
            referencedRelation: "profiles_view_linked"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_applications_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_applications_product_fkey"
            columns: ["product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          }
        ]
      }
      profile_documents: {
        Row: {
          created_at: string | null
          id: number
          type: number | null
          url: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          type?: number | null
          url?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          type?: number | null
          url?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_documents_type_fkey"
            columns: ["type"]
            referencedRelation: "document_type"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          approved: boolean | null
          avatar: string | null
          country_id_type: Database["public"]["Enums"]["country_id_type"] | null
          country_identifier: string | null
          date_of_birth: string | null
          email: string | null
          external_id: string | null
          fintech_consent: string | null
          first_name: string | null
          gender: string | null
          id: string
          is_registered: boolean | null
          last_name: string | null
          marketing_consent: boolean
          middle_name: string | null
          nationality: string | null
          partner: string | null
          phone: string | null
          platform: string | null
          ref: number
          shared_consent: string | null
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          approved?: boolean | null
          avatar?: string | null
          country_id_type?:
            | Database["public"]["Enums"]["country_id_type"]
            | null
          country_identifier?: string | null
          date_of_birth?: string | null
          email?: string | null
          external_id?: string | null
          fintech_consent?: string | null
          first_name?: string | null
          gender?: string | null
          id: string
          is_registered?: boolean | null
          last_name?: string | null
          marketing_consent?: boolean
          middle_name?: string | null
          nationality?: string | null
          partner?: string | null
          phone?: string | null
          platform?: string | null
          ref?: number
          shared_consent?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          approved?: boolean | null
          avatar?: string | null
          country_id_type?:
            | Database["public"]["Enums"]["country_id_type"]
            | null
          country_identifier?: string | null
          date_of_birth?: string | null
          email?: string | null
          external_id?: string | null
          fintech_consent?: string | null
          first_name?: string | null
          gender?: string | null
          id?: string
          is_registered?: boolean | null
          last_name?: string | null
          marketing_consent?: boolean
          middle_name?: string | null
          nationality?: string | null
          partner?: string | null
          phone?: string | null
          platform?: string | null
          ref?: number
          shared_consent?: string | null
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_address: {
        Row: {
          city: string | null
          country: string | null
          created_at: string
          created_by: string | null
          id: string
          linked_external: string | null
          linked_organisation: number | null
          province: string | null
          shipping_city: string | null
          shipping_country: string | null
          shipping_street_address: string | null
          shipping_zip_code: string | null
          street_address: string | null
          surburb: string | null
          updated_at: string
          zip_code: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number | null
          province?: string | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_street_address?: string | null
          shipping_zip_code?: string | null
          street_address?: string | null
          surburb?: string | null
          updated_at?: string
          zip_code?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number | null
          province?: string | null
          shipping_city?: string | null
          shipping_country?: string | null
          shipping_street_address?: string | null
          shipping_zip_code?: string | null
          street_address?: string | null
          surburb?: string | null
          updated_at?: string
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_address_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_address_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_address_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_bank_details: {
        Row: {
          account_number: string
          account_type: string
          bank_name: string
          branch_code: string | null
          branch_name: string | null
          clearing_code: string | null
          created_at: string | null
          created_by: string | null
          forex_code: string | null
          holder_name: string | null
          id: string
          linked_external: string | null
          linked_organisation: number | null
          updated_at: string
        }
        Insert: {
          account_number: string
          account_type: string
          bank_name: string
          branch_code?: string | null
          branch_name?: string | null
          clearing_code?: string | null
          created_at?: string | null
          created_by?: string | null
          forex_code?: string | null
          holder_name?: string | null
          id: string
          linked_external?: string | null
          linked_organisation?: number | null
          updated_at?: string
        }
        Update: {
          account_number?: string
          account_type?: string
          bank_name?: string
          branch_code?: string | null
          branch_name?: string | null
          clearing_code?: string | null
          created_at?: string | null
          created_by?: string | null
          forex_code?: string | null
          holder_name?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_bank_details_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_bank_details_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_bank_details_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_bank_details_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_last_known: {
        Row: {
          application_step: number | null
          created_at: string
          id: string
          known_step: string | null
          last_brand_url: string | null
          linked_order: string | null
          referer_url: string | null
          registration_step: number | null
          updated_at: string
        }
        Insert: {
          application_step?: number | null
          created_at?: string
          id: string
          known_step?: string | null
          last_brand_url?: string | null
          linked_order?: string | null
          referer_url?: string | null
          registration_step?: number | null
          updated_at?: string
        }
        Update: {
          application_step?: number | null
          created_at?: string
          id?: string
          known_step?: string | null
          last_brand_url?: string | null
          linked_order?: string | null
          referer_url?: string | null
          registration_step?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_last_known_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_last_known_known_step_fkey"
            columns: ["known_step"]
            referencedRelation: "workflow_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_last_known_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_last_known_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_last_known_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_enhanced"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_last_known_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_view"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_linked_orders: {
        Row: {
          created_at: string | null
          created_by: string
          id: number
          linked_orders: string[]
          linked_partner: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          id?: number
          linked_orders: string[]
          linked_partner?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          id?: number
          linked_orders?: string[]
          linked_partner?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_linked_orders_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_linked_orders_linked_partner_fkey"
            columns: ["linked_partner"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_linked_partner: {
        Row: {
          created_at: string
          id: string
          partner: string | null
          partner_user: string | null
        }
        Insert: {
          created_at?: string
          id: string
          partner?: string | null
          partner_user?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          partner?: string | null
          partner_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_linked_partner_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_linked_partner_partner_fkey"
            columns: ["partner"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_linked_partner_partner_user_fkey"
            columns: ["partner_user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_next_of_kin: {
        Row: {
          alternative_number: string | null
          created_at: string | null
          created_by: string | null
          id: string
          name: string | null
          phone_number: string | null
          reference_id_number: string | null
          relationship: string | null
          surname: string | null
          updated_at: string | null
        }
        Insert: {
          alternative_number?: string | null
          created_at?: string | null
          created_by?: string | null
          id: string
          name?: string | null
          phone_number?: string | null
          reference_id_number?: string | null
          relationship?: string | null
          surname?: string | null
          updated_at?: string | null
        }
        Update: {
          alternative_number?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          name?: string | null
          phone_number?: string | null
          reference_id_number?: string | null
          relationship?: string | null
          surname?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_next_of_kin_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_next_of_kin_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_validations: {
        Row: {
          affordability: string | null
          banking_verified: string | null
          created_at: string | null
          created_by: string | null
          id: string
          identity: string | null
          linked_external: string | null
          linked_organisation: number
          transaction_ref: number | null
          updated_at: string
        }
        Insert: {
          affordability?: string | null
          banking_verified?: string | null
          created_at?: string | null
          created_by?: string | null
          id: string
          identity?: string | null
          linked_external?: string | null
          linked_organisation?: number
          transaction_ref?: number | null
          updated_at?: string
        }
        Update: {
          affordability?: string | null
          banking_verified?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          identity?: string | null
          linked_external?: string | null
          linked_organisation?: number
          transaction_ref?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_validations_affordability_fkey"
            columns: ["affordability"]
            referencedRelation: "validation_results"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_validations_banking_verified_fkey"
            columns: ["banking_verified"]
            referencedRelation: "validation_results"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_validations_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_validations_identity_fkey"
            columns: ["identity"]
            referencedRelation: "validation_results"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_validations_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_validations_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_validations_transaction_ref_fkey"
            columns: ["transaction_ref"]
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_work_details: {
        Row: {
          business_reg_details: string | null
          created_at: string | null
          created_by: string | null
          employee_number: string | null
          employer_address: string | null
          employer_city: string | null
          employer_id: number | null
          employer_name: string | null
          employer_surburb: string | null
          employment_payment_frequency: number | null
          employment_retirement_date: string | null
          employment_sector: string | null
          employment_start_date: string | null
          employment_status_id: number | null
          employment_type: number | null
          expenses: number | null
          gross_income: number | null
          hr_contact_person: string | null
          hr_contract_number: string | null
          id: string
          linked_external: string | null
          linked_organisation: number | null
          net_income: number | null
          payment_frequency: number | null
          position: string | null
          preferred_payment_date: number | null
          salary_payment_date: string | null
          updated_at: string | null
        }
        Insert: {
          business_reg_details?: string | null
          created_at?: string | null
          created_by?: string | null
          employee_number?: string | null
          employer_address?: string | null
          employer_city?: string | null
          employer_id?: number | null
          employer_name?: string | null
          employer_surburb?: string | null
          employment_payment_frequency?: number | null
          employment_retirement_date?: string | null
          employment_sector?: string | null
          employment_start_date?: string | null
          employment_status_id?: number | null
          employment_type?: number | null
          expenses?: number | null
          gross_income?: number | null
          hr_contact_person?: string | null
          hr_contract_number?: string | null
          id: string
          linked_external?: string | null
          linked_organisation?: number | null
          net_income?: number | null
          payment_frequency?: number | null
          position?: string | null
          preferred_payment_date?: number | null
          salary_payment_date?: string | null
          updated_at?: string | null
        }
        Update: {
          business_reg_details?: string | null
          created_at?: string | null
          created_by?: string | null
          employee_number?: string | null
          employer_address?: string | null
          employer_city?: string | null
          employer_id?: number | null
          employer_name?: string | null
          employer_surburb?: string | null
          employment_payment_frequency?: number | null
          employment_retirement_date?: string | null
          employment_sector?: string | null
          employment_start_date?: string | null
          employment_status_id?: number | null
          employment_type?: number | null
          expenses?: number | null
          gross_income?: number | null
          hr_contact_person?: string | null
          hr_contract_number?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number | null
          net_income?: number | null
          payment_frequency?: number | null
          position?: string | null
          preferred_payment_date?: number | null
          salary_payment_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_work_details_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_work_details_employment_type_fkey"
            columns: ["employment_type"]
            referencedRelation: "employment_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_work_details_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_work_details_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_work_details_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      refund_transactions: {
        Row: {
          backoffice_details: Json | null
          client_id: string
          created_at: string
          id: string
          loan_details: Json | null
          loan_id: string
          organisation: string
          parsed: boolean
          ready: boolean
          result: Json | null
          transaction_amount: number | null
          transaction_date: string | null
        }
        Insert: {
          backoffice_details?: Json | null
          client_id: string
          created_at?: string
          id?: string
          loan_details?: Json | null
          loan_id: string
          organisation: string
          parsed?: boolean
          ready?: boolean
          result?: Json | null
          transaction_amount?: number | null
          transaction_date?: string | null
        }
        Update: {
          backoffice_details?: Json | null
          client_id?: string
          created_at?: string
          id?: string
          loan_details?: Json | null
          loan_id?: string
          organisation?: string
          parsed?: boolean
          ready?: boolean
          result?: Json | null
          transaction_amount?: number | null
          transaction_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "refund_transactions_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["tenant_id"]
          }
        ]
      }
      reoffers: {
        Row: {
          created_at: string | null
          id: number
          linked_order: string | null
          new_banking_details: Json | null
          new_employment_details: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          linked_order?: string | null
          new_banking_details?: Json | null
          new_employment_details?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: number
          linked_order?: string | null
          new_banking_details?: Json | null
          new_employment_details?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "reoffers_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reoffers_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_detail"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reoffers_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_enhanced"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reoffers_linked_order_fkey"
            columns: ["linked_order"]
            referencedRelation: "orders_view"
            referencedColumns: ["id"]
          }
        ]
      }
      repayment_transactions: {
        Row: {
          approved_by: string | null
          client_external_id: string | null
          client_name: string | null
          completed: boolean
          created_at: string | null
          created_by: string
          employee_number: string | null
          employer: string | null
          filename: string | null
          id: string
          json_response: Json | null
          loan_balance: number | null
          loan_id: string | null
          loan_id_paid: number | null
          matching_instalment: number | null
          message: string | null
          organisation: number
          payment_type_id: number | null
          status: string | null
          transaction_amount: number | null
          transaction_date: string | null
          transaction_reference: string | null
          updated_at: string | null
        }
        Insert: {
          approved_by?: string | null
          client_external_id?: string | null
          client_name?: string | null
          completed?: boolean
          created_at?: string | null
          created_by: string
          employee_number?: string | null
          employer?: string | null
          filename?: string | null
          id?: string
          json_response?: Json | null
          loan_balance?: number | null
          loan_id?: string | null
          loan_id_paid?: number | null
          matching_instalment?: number | null
          message?: string | null
          organisation: number
          payment_type_id?: number | null
          status?: string | null
          transaction_amount?: number | null
          transaction_date?: string | null
          transaction_reference?: string | null
          updated_at?: string | null
        }
        Update: {
          approved_by?: string | null
          client_external_id?: string | null
          client_name?: string | null
          completed?: boolean
          created_at?: string | null
          created_by?: string
          employee_number?: string | null
          employer?: string | null
          filename?: string | null
          id?: string
          json_response?: Json | null
          loan_balance?: number | null
          loan_id?: string | null
          loan_id_paid?: number | null
          matching_instalment?: number | null
          message?: string | null
          organisation?: number
          payment_type_id?: number | null
          status?: string | null
          transaction_amount?: number | null
          transaction_date?: string | null
          transaction_reference?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "repayment_transactions_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      revio_clients: {
        Row: {
          created_at: string | null
          email: string | null
          external_id: string
          id: string
          updated_at: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          external_id: string
          id: string
          updated_at?: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          external_id?: string
          id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "revio_clients_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      revio_configs: {
        Row: {
          api_key: string | null
          brand_id: string
          created_at: string | null
          currency: string
          description: string | null
          id: number
          name: string | null
          organisation: number
          value_type: string | null
        }
        Insert: {
          api_key?: string | null
          brand_id: string
          created_at?: string | null
          currency: string
          description?: string | null
          id?: number
          name?: string | null
          organisation: number
          value_type?: string | null
        }
        Update: {
          api_key?: string | null
          brand_id?: string
          created_at?: string | null
          currency?: string
          description?: string | null
          id?: number
          name?: string | null
          organisation?: number
          value_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "revio_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      sacra_configs: {
        Row: {
          account_type: string | null
          account_type_desc: string | null
          created_at: string
          id: number
          organisation: number | null
          password: string | null
          supplier_reference_number: string | null
          username: string | null
        }
        Insert: {
          account_type?: string | null
          account_type_desc?: string | null
          created_at?: string
          id?: number
          organisation?: number | null
          password?: string | null
          supplier_reference_number?: string | null
          username?: string | null
        }
        Update: {
          account_type?: string | null
          account_type_desc?: string | null
          created_at?: string
          id?: number
          organisation?: number | null
          password?: string | null
          supplier_reference_number?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sacra_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      sacra_report: {
        Row: {
          created_at: string
          id: number
          message: string | null
          result_json: Json | null
          status: string | null
          transaction_ref: string | null
          unique_identifier: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          message?: string | null
          result_json?: Json | null
          status?: string | null
          transaction_ref?: string | null
          unique_identifier?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          message?: string | null
          result_json?: Json | null
          status?: string | null
          transaction_ref?: string | null
          unique_identifier?: string | null
        }
        Relationships: []
      }
      safps_configs: {
        Row: {
          client_id: string | null
          client_secret: string | null
          created_at: string | null
          id: number
          organisation: number | null
        }
        Insert: {
          client_id?: string | null
          client_secret?: string | null
          created_at?: string | null
          id?: number
          organisation?: number | null
        }
        Update: {
          client_id?: string | null
          client_secret?: string | null
          created_at?: string | null
          id?: number
          organisation?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "safps_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      sanctions_list: {
        Row: {
          COMMENTS1: string | null
          COUNTRY: string | null
          DATAID: string | null
          DESIGNATION: string | null
          FIRST_NAME: string | null
          FOURTH_NAME: string | null
          Id: string | null
          INDIVIDUAL_ADDRESS: string | null
          INDIVIDUAL_ALIAS: string | null
          INDIVIDUAL_DATE_OF_BIRTH: string | null
          INDIVIDUAL_DOCUMENT: string | null
          LAST_DAY_UPDATED: string | null
          LIST_TYPE: string | null
          LISTED_ON: string | null
          NATIONALITY: string | null
          REFERENCE_NUMBER: string | null
          RefId: string | null
          SECOND_NAME: string | null
          SORT_KEY: string | null
          THIRD_NAME: string | null
          UN_LIST_TYPE: string | null
          VERSIONNUM: string | null
        }
        Insert: {
          COMMENTS1?: string | null
          COUNTRY?: string | null
          DATAID?: string | null
          DESIGNATION?: string | null
          FIRST_NAME?: string | null
          FOURTH_NAME?: string | null
          Id?: string | null
          INDIVIDUAL_ADDRESS?: string | null
          INDIVIDUAL_ALIAS?: string | null
          INDIVIDUAL_DATE_OF_BIRTH?: string | null
          INDIVIDUAL_DOCUMENT?: string | null
          LAST_DAY_UPDATED?: string | null
          LIST_TYPE?: string | null
          LISTED_ON?: string | null
          NATIONALITY?: string | null
          REFERENCE_NUMBER?: string | null
          RefId?: string | null
          SECOND_NAME?: string | null
          SORT_KEY?: string | null
          THIRD_NAME?: string | null
          UN_LIST_TYPE?: string | null
          VERSIONNUM?: string | null
        }
        Update: {
          COMMENTS1?: string | null
          COUNTRY?: string | null
          DATAID?: string | null
          DESIGNATION?: string | null
          FIRST_NAME?: string | null
          FOURTH_NAME?: string | null
          Id?: string | null
          INDIVIDUAL_ADDRESS?: string | null
          INDIVIDUAL_ALIAS?: string | null
          INDIVIDUAL_DATE_OF_BIRTH?: string | null
          INDIVIDUAL_DOCUMENT?: string | null
          LAST_DAY_UPDATED?: string | null
          LIST_TYPE?: string | null
          LISTED_ON?: string | null
          NATIONALITY?: string | null
          REFERENCE_NUMBER?: string | null
          RefId?: string | null
          SECOND_NAME?: string | null
          SORT_KEY?: string | null
          THIRD_NAME?: string | null
          UN_LIST_TYPE?: string | null
          VERSIONNUM?: string | null
        }
        Relationships: []
      }
      target_sales_setup: {
        Row: {
          Apr: number | null
          Aug: number | null
          created_at: string
          Dec: number | null
          Feb: number | null
          id: number
          Jan: number | null
          Jul: number | null
          Jun: number | null
          Mar: number | null
          May: number | null
          Nov: number | null
          Oct: number | null
          partner: string | null
          product: number | null
          Sep: number | null
          target_amount: number | null
        }
        Insert: {
          Apr?: number | null
          Aug?: number | null
          created_at?: string
          Dec?: number | null
          Feb?: number | null
          id?: number
          Jan?: number | null
          Jul?: number | null
          Jun?: number | null
          Mar?: number | null
          May?: number | null
          Nov?: number | null
          Oct?: number | null
          partner?: string | null
          product?: number | null
          Sep?: number | null
          target_amount?: number | null
        }
        Update: {
          Apr?: number | null
          Aug?: number | null
          created_at?: string
          Dec?: number | null
          Feb?: number | null
          id?: number
          Jan?: number | null
          Jul?: number | null
          Jun?: number | null
          Mar?: number | null
          May?: number | null
          Nov?: number | null
          Oct?: number | null
          partner?: string | null
          product?: number | null
          Sep?: number | null
          target_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "target_sales_setup_partner_fkey"
            columns: ["partner"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "target_sales_setup_product_fkey"
            columns: ["product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions: {
        Row: {
          completed: boolean
          completed_at: string | null
          created_at: string | null
          created_by: string | null
          debicheck_external_id: string | null
          id: number
          json_request: Json
          linked_external: string | null
          parsed: boolean | null
          product_id: string
          result_json: Json | null
          source_app: string
          status: string
          tenant_id: string
          webhook_url: string | null
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          debicheck_external_id?: string | null
          id?: number
          json_request: Json
          linked_external?: string | null
          parsed?: boolean | null
          product_id: string
          result_json?: Json | null
          source_app: string
          status?: string
          tenant_id: string
          webhook_url?: string | null
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          debicheck_external_id?: string | null
          id?: number
          json_request?: Json
          linked_external?: string | null
          parsed?: boolean | null
          product_id?: string
          result_json?: Json | null
          source_app?: string
          status?: string
          tenant_id?: string
          webhook_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_tenant_id_fkey"
            columns: ["tenant_id"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["tenant_id"]
          }
        ]
      }
      transunion_configs: {
        Row: {
          contact_name: string | null
          contact_number: string | null
          created_at: string
          description: string | null
          id: number
          min_credit_score: number
          name: string | null
          organisation: number
          security_code: string
          subscriber_code: string
        }
        Insert: {
          contact_name?: string | null
          contact_number?: string | null
          created_at?: string
          description?: string | null
          id?: number
          min_credit_score?: number
          name?: string | null
          organisation: number
          security_code: string
          subscriber_code: string
        }
        Update: {
          contact_name?: string | null
          contact_number?: string | null
          created_at?: string
          description?: string | null
          id?: number
          min_credit_score?: number
          name?: string | null
          organisation?: number
          security_code?: string
          subscriber_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "transunion_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      truid_configs: {
        Row: {
          api_key: string | null
          brand_id: string
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          organisation: number
          redirect_url: string | null
          services: string[]
          webhook_url: string | null
        }
        Insert: {
          api_key?: string | null
          brand_id: string
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          organisation: number
          redirect_url?: string | null
          services: string[]
          webhook_url?: string | null
        }
        Update: {
          api_key?: string | null
          brand_id?: string
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          organisation?: number
          redirect_url?: string | null
          services?: string[]
          webhook_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "truid_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      user_documents: {
        Row: {
          collection_date: string | null
          created_at: string
          expiry_date: string | null
          id: string
          linked_profile: string | null
          pass: string | null
          type: string
          updated_at: string
          urn: string
        }
        Insert: {
          collection_date?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          linked_profile?: string | null
          pass?: string | null
          type: string
          updated_at?: string
          urn: string
        }
        Update: {
          collection_date?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          linked_profile?: string | null
          pass?: string | null
          type?: string
          updated_at?: string
          urn?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_documents_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "external_user_views"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_documents_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_documents_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_documents_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "profiles_view_linked"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_documents_type_fkey"
            columns: ["type"]
            referencedRelation: "document_type"
            referencedColumns: ["code"]
          }
        ]
      }
      user_group_permissions: {
        Row: {
          apply_for_loan: boolean | null
          client_full_access: boolean | null
          client_search: boolean | null
          clients: boolean | null
          created_at: string | null
          id: number
          loan_application: boolean | null
          loans: boolean | null
          main_dashboard: boolean | null
          partner_admin: boolean | null
          partners: boolean | null
          settings: boolean | null
          shop_products: boolean | null
          user_level: string | null
        }
        Insert: {
          apply_for_loan?: boolean | null
          client_full_access?: boolean | null
          client_search?: boolean | null
          clients?: boolean | null
          created_at?: string | null
          id?: number
          loan_application?: boolean | null
          loans?: boolean | null
          main_dashboard?: boolean | null
          partner_admin?: boolean | null
          partners?: boolean | null
          settings?: boolean | null
          shop_products?: boolean | null
          user_level?: string | null
        }
        Update: {
          apply_for_loan?: boolean | null
          client_full_access?: boolean | null
          client_search?: boolean | null
          clients?: boolean | null
          created_at?: string | null
          id?: number
          loan_application?: boolean | null
          loans?: boolean | null
          main_dashboard?: boolean | null
          partner_admin?: boolean | null
          partners?: boolean | null
          settings?: boolean | null
          shop_products?: boolean | null
          user_level?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
        }
        Relationships: []
      }
      ussd_clients: {
        Row: {
          blocked: boolean
          country_identifier: string
          created_at: string | null
          first_name: string
          id: string
          language: number
          last_name: string | null
          linked_profile: string | null
          phone: string
          pin: string | null
          pin_retry: number
          updated_at: string | null
          ussd_platform: number
        }
        Insert: {
          blocked?: boolean
          country_identifier: string
          created_at?: string | null
          first_name: string
          id?: string
          language?: number
          last_name?: string | null
          linked_profile?: string | null
          phone: string
          pin?: string | null
          pin_retry?: number
          updated_at?: string | null
          ussd_platform: number
        }
        Update: {
          blocked?: boolean
          country_identifier?: string
          created_at?: string | null
          first_name?: string
          id?: string
          language?: number
          last_name?: string | null
          linked_profile?: string | null
          phone?: string
          pin?: string | null
          pin_retry?: number
          updated_at?: string | null
          ussd_platform?: number
        }
        Relationships: [
          {
            foreignKeyName: "ussd_clients_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "external_user_views"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ussd_clients_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ussd_clients_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ussd_clients_linked_profile_fkey"
            columns: ["linked_profile"]
            referencedRelation: "profiles_view_linked"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ussd_clients_ussd_platform_fkey"
            columns: ["ussd_platform"]
            referencedRelation: "ussd_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      ussd_configs: {
        Row: {
          contact: string | null
          country_iso: string | null
          created_at: string
          email: string | null
          id: number
          loan_products: Json[] | null
          menu_item_config: Json[] | null
          menu_items: Json[] | null
          message_config: Json | null
          name: string
          notifications: boolean
          organization: number | null
          service_code: string | null
          sms_key: string | null
          sms_short_code: string | null
          sms_url: string | null
          sms_username: string | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          contact?: string | null
          country_iso?: string | null
          created_at?: string
          email?: string | null
          id?: number
          loan_products?: Json[] | null
          menu_item_config?: Json[] | null
          menu_items?: Json[] | null
          message_config?: Json | null
          name?: string
          notifications?: boolean
          organization?: number | null
          service_code?: string | null
          sms_key?: string | null
          sms_short_code?: string | null
          sms_url?: string | null
          sms_username?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          contact?: string | null
          country_iso?: string | null
          created_at?: string
          email?: string | null
          id?: number
          loan_products?: Json[] | null
          menu_item_config?: Json[] | null
          menu_items?: Json[] | null
          message_config?: Json | null
          name?: string
          notifications?: boolean
          organization?: number | null
          service_code?: string | null
          sms_key?: string | null
          sms_short_code?: string | null
          sms_url?: string | null
          sms_username?: string | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ussd_configs_country_iso_fkey"
            columns: ["country_iso"]
            referencedRelation: "country"
            referencedColumns: ["iso"]
          },
          {
            foreignKeyName: "ussd_configs_organization_fkey"
            columns: ["organization"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      ussd_sessions: {
        Row: {
          context: string | null
          created_at: string | null
          id: string
          linked_ussd_client: string | null
          phone: string
          previous_context: string
          ref_data: Json | null
          service_code: string
          session_id: string
          updated_at: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          id?: string
          linked_ussd_client?: string | null
          phone: string
          previous_context?: string
          ref_data?: Json | null
          service_code?: string
          session_id: string
          updated_at?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string | null
          id?: string
          linked_ussd_client?: string | null
          phone?: string
          previous_context?: string
          ref_data?: Json | null
          service_code?: string
          session_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ussd_sessions_linked_ussd_client_fkey"
            columns: ["linked_ussd_client"]
            referencedRelation: "ussd_clients"
            referencedColumns: ["id"]
          }
        ]
      }
      validation_requests: {
        Row: {
          backoffice_location: string | null
          created_at: string | null
          created_by: string | null
          external_id: string | null
          id: string
          linked_external: string | null
          linked_organisation: number
          lookup_type: number
          search_key: string | null
          status_log: Json | null
          updated_at: string
          validation_id: string | null
          validation_status: number | null
          verification_result: string
          verification_source_url: string | null
        }
        Insert: {
          backoffice_location?: string | null
          created_at?: string | null
          created_by?: string | null
          external_id?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number
          lookup_type: number
          search_key?: string | null
          status_log?: Json | null
          updated_at?: string
          validation_id?: string | null
          validation_status?: number | null
          verification_result?: string
          verification_source_url?: string | null
        }
        Update: {
          backoffice_location?: string | null
          created_at?: string | null
          created_by?: string | null
          external_id?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number
          lookup_type?: number
          search_key?: string | null
          status_log?: Json | null
          updated_at?: string
          validation_id?: string | null
          validation_status?: number | null
          verification_result?: string
          verification_source_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "validation_requests_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_requests_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_requests_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_requests_lookup_type_fkey"
            columns: ["lookup_type"]
            referencedRelation: "verification_lookup_type"
            referencedColumns: ["id"]
          }
        ]
      }
      validation_results: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          linked_external: string | null
          linked_organisation: number | null
          linked_req: string | null
          lookup_type: number | null
          result: number | null
          result_log: Json | null
          task: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number | null
          linked_req?: string | null
          lookup_type?: number | null
          result?: number | null
          result_log?: Json | null
          task?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          linked_external?: string | null
          linked_organisation?: number | null
          linked_req?: string | null
          lookup_type?: number | null
          result?: number | null
          result_log?: Json | null
          task?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "validation_results_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_results_linked_external_fkey"
            columns: ["linked_external"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_results_linked_organisation_fkey"
            columns: ["linked_organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_results_linked_req_fkey"
            columns: ["linked_req"]
            referencedRelation: "validation_requests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "validation_results_lookup_type_fkey"
            columns: ["lookup_type"]
            referencedRelation: "verification_lookup_type"
            referencedColumns: ["id"]
          }
        ]
      }
      vccb_configs: {
        Row: {
          created_at: string
          id: number
          organisation: number | null
          password: string | null
          username: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          organisation?: number | null
          password?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          organisation?: number | null
          password?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vccb_configs_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          }
        ]
      }
      verification_lookup_type: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      workflow_configs: {
        Row: {
          created_at: string | null
          description: string | null
          fields: Json | null
          id: string
          linked_product: number
          name: string | null
          position: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          fields?: Json | null
          id?: string
          linked_product: number
          name?: string | null
          position?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          fields?: Json | null
          id?: string
          linked_product?: number
          name?: string | null
          position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "workflow_configs_linked_product_fkey"
            columns: ["linked_product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          }
        ]
      }
      x3_journal_entries: {
        Row: {
          auuid_0: string | null
          created_at: string | null
          credattim_0: string | null
          creusr_0: string | null
          id: number
          is_parsed: boolean | null
          rowid: string | null
          upddattim_0: string | null
          updusr_0: string | null
          zacc_0: string | null
          zamt_0: string | null
          zcdind_0: string | null
          zcurr_0: string | null
          zdentry_0: string | null
          zdimtyp_0: string | null
          zdimtyp_1: string | null
          zdimtyp_2: string | null
          zdimtyp_3: string | null
          zdimtyp_4: string | null
          zdimval_0: string | null
          zdimval_1: string | null
          zdimval_2: string | null
          zdimval_3: string | null
          zdimval_4: string | null
          zerr_0: string | null
          zgendat_0: string | null
          zrefid_0: string | null
          zsdes_0: string | null
          zsite_0: string | null
          zsref_0: string | null
          zsta_0: string | null
          zstasref_0: string | null
          ztrandat_0: string | null
        }
        Insert: {
          auuid_0?: string | null
          created_at?: string | null
          credattim_0?: string | null
          creusr_0?: string | null
          id?: number
          is_parsed?: boolean | null
          rowid?: string | null
          upddattim_0?: string | null
          updusr_0?: string | null
          zacc_0?: string | null
          zamt_0?: string | null
          zcdind_0?: string | null
          zcurr_0?: string | null
          zdentry_0?: string | null
          zdimtyp_0?: string | null
          zdimtyp_1?: string | null
          zdimtyp_2?: string | null
          zdimtyp_3?: string | null
          zdimtyp_4?: string | null
          zdimval_0?: string | null
          zdimval_1?: string | null
          zdimval_2?: string | null
          zdimval_3?: string | null
          zdimval_4?: string | null
          zerr_0?: string | null
          zgendat_0?: string | null
          zrefid_0?: string | null
          zsdes_0?: string | null
          zsite_0?: string | null
          zsref_0?: string | null
          zsta_0?: string | null
          zstasref_0?: string | null
          ztrandat_0?: string | null
        }
        Update: {
          auuid_0?: string | null
          created_at?: string | null
          credattim_0?: string | null
          creusr_0?: string | null
          id?: number
          is_parsed?: boolean | null
          rowid?: string | null
          upddattim_0?: string | null
          updusr_0?: string | null
          zacc_0?: string | null
          zamt_0?: string | null
          zcdind_0?: string | null
          zcurr_0?: string | null
          zdentry_0?: string | null
          zdimtyp_0?: string | null
          zdimtyp_1?: string | null
          zdimtyp_2?: string | null
          zdimtyp_3?: string | null
          zdimtyp_4?: string | null
          zdimval_0?: string | null
          zdimval_1?: string | null
          zdimval_2?: string | null
          zdimval_3?: string | null
          zdimval_4?: string | null
          zerr_0?: string | null
          zgendat_0?: string | null
          zrefid_0?: string | null
          zsdes_0?: string | null
          zsite_0?: string | null
          zsref_0?: string | null
          zsta_0?: string | null
          zstasref_0?: string | null
          ztrandat_0?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      external_user_views: {
        Row: {
          comm_basis: string | null
          comm_cap: number | null
          comm_pay_to: string | null
          comm_rate: number | null
          country_identifier: string | null
          email: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          link_id: number | null
          linked_external_party: string | null
          linked_user: string | null
          main_role: number | null
          mer_id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "external_parties_users_linked_external_party_fkey"
            columns: ["linked_external_party"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "external_user_views"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "profiles_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_linked_user_fkey"
            columns: ["linked_user"]
            referencedRelation: "profiles_view_linked"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "external_parties_users_main_role_fkey"
            columns: ["main_role"]
            referencedRelation: "user_group_permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      orders_detail: {
        Row: {
          business_name: string | null
          client_id: string | null
          country_identifier: string | null
          created_at: string | null
          currency: string | null
          email: string | null
          first_name: string | null
          id: string | null
          interest_rate: number | null
          last_known_step: number | null
          last_name: string | null
          linked_backoffice_id: string | null
          linked_merchant: string | null
          loanstate: string | null
          nationality: string | null
          organisation_id: string | null
          organisation_name: string | null
          phone: string | null
          product: string | null
          productname: string | null
          ref_data: Json | null
          status: number | null
          total: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_linked_merchant_fkey"
            columns: ["linked_merchant"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_status_fkey"
            columns: ["status"]
            referencedRelation: "order_status"
            referencedColumns: ["id"]
          }
        ]
      }
      orders_enhanced: {
        Row: {
          client_id: string | null
          country_identifier: string | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          email: string | null
          failReturnUrl: string | null
          failureWebhook: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          linked_merchant: string | null
          linked_organisation_product: number | null
          nationality: string | null
          order_id: string | null
          organisation_id: string | null
          organisation_name: string | null
          phone: string | null
          product: string | null
          products: Json[] | null
          ref_data: Json | null
          status: number | null
          successReturnUrl: string | null
          successWebhook: string | null
          total: number | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_linked_merchant_fkey"
            columns: ["linked_merchant"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_linked_organisation_product_fkey"
            columns: ["linked_organisation_product"]
            referencedRelation: "organisation_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_status_fkey"
            columns: ["status"]
            referencedRelation: "order_status"
            referencedColumns: ["id"]
          }
        ]
      }
      orders_view: {
        Row: {
          business_name: string | null
          client_id: string | null
          created_at: string | null
          id: string | null
          interest_rate: number | null
          last_known_step: number | null
          loanstate: string | null
          organisation_id: string | null
          organisation_name: string | null
          productname: string | null
          ref_data: Json | null
          total: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      product_orgs: {
        Row: {
          id: number | null
          name: string | null
          organisation: number | null
          product: number | null
        }
        Relationships: [
          {
            foreignKeyName: "organisation_products_organisation_fkey"
            columns: ["organisation"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_products_product_fkey"
            columns: ["product"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisation_products_product_fkey"
            columns: ["product"]
            referencedRelation: "product_orgs"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_view: {
        Row: {
          account_number: string | null
          account_type: string | null
          alternative_number: string | null
          bank_name: string | null
          branch_code: string | null
          branch_name: string | null
          business_reg_details: string | null
          city: string | null
          country_identifier: string | null
          date_of_birth: string | null
          email: string | null
          employee_number: string | null
          employer_name: string | null
          employment_retirement_date: string | null
          employment_sector: string | null
          employment_start_date: string | null
          employment_type: number | null
          expenses: number | null
          first_name: string | null
          forex_code: string | null
          gender: string | null
          gross_income: number | null
          holder_name: string | null
          hr_contact_person: string | null
          hr_contract_number: string | null
          id: string | null
          last_name: string | null
          name: string | null
          net_income: number | null
          payment_frequency: number | null
          phone: string | null
          phone_number: string | null
          position: string | null
          preferred_payment_date: number | null
          province: string | null
          reference_id_number: string | null
          relationship: string | null
          salary_payment_date: string | null
          street_address: string | null
          surname: string | null
          zip_code: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_work_details_employment_type_fkey"
            columns: ["employment_type"]
            referencedRelation: "employment_types"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles_view_linked: {
        Row: {
          approved: boolean | null
          country_identifier: string | null
          date_of_birth: string | null
          email: string | null
          first_name: string | null
          gender: string | null
          id: string | null
          last_name: string | null
          partner: string | null
          partner_user: string | null
          phone: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_linked_partner_partner_fkey"
            columns: ["partner"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_linked_partner_partner_user_fkey"
            columns: ["partner_user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      transaction_view: {
        Row: {
          amount: string | null
          country_identifier: string | null
          created_at: string | null
          disbursementdate: string | null
          first_name: string | null
          firstpaymentdates: string | null
          installment: string | null
          last_name: string | null
          loan_id: Json | null
          partner: string | null
          tenures: string | null
        }
        Relationships: []
      }
      transaction_view_linked: {
        Row: {
          amount: string | null
          country_identifier: string | null
          created_at: string | null
          disbursementdate: string | null
          first_name: string | null
          firstpaymentdates: string | null
          installment: string | null
          last_name: string | null
          loan_id: Json | null
          partner: string | null
          tenures: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_linked_partner_partner_fkey"
            columns: ["partner"]
            referencedRelation: "external_parties"
            referencedColumns: ["id"]
          }
        ]
      }
      transactions_view: {
        Row: {
          amount: string | null
          country_identifier: string | null
          created_at: string | null
          disbursementdate: string | null
          first_name: string | null
          firstpaymentdates: string | null
          installment: string | null
          last_name: string | null
          loan_id: Json | null
          loan_id_order: string | null
          partner: string | null
          product: string | null
          tenures: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_tenant_id_fkey"
            columns: ["product"]
            referencedRelation: "organisation_configs"
            referencedColumns: ["tenant_id"]
          }
        ]
      }
    }
    Functions: {
      check_country_identifier_exists: {
        Args: {
          country_identifier_text: string
        }
        Returns: boolean
      }
      check_order_status_not_disbursed: {
        Args: {
          country_identifier_text: string
        }
        Returns: boolean
      }
      get_client_transaction: {
        Args: {
          client_id: string
        }
        Returns: {
          amount: string
          loan_id: string
          created_at: string
        }[]
      }
      get_grouped_transaction:
        | {
            Args: Record<PropertyKey, never>
            Returns: {
              employer: string
              loan_balance: number
              transaction_amount: number
              pending: number
              approved: number
              failed: number
              rejected: number
              transaction_date: string
              transaction_reference: string
            }[]
          }
        | {
            Args: {
              tenant?: string
            }
            Returns: {
              employer: string
              loan_balance: number
              transaction_amount: number
              pending: number
              approved: number
              failed: number
              rejected: number
              transaction_date: string
              transaction_reference: string
            }[]
          }
      get_guest_order: {
        Args: {
          idnumber: string
        }
        Returns: string
      }
      get_requests: {
        Args: {
          requests: string[]
        }
        Returns: {
          created_at: string | null
          created_by: string | null
          id: string
          linked_external: string | null
          linked_organisation: number | null
          linked_req: string | null
          lookup_type: number | null
          result: number | null
          result_log: Json | null
          task: string | null
          updated_at: string | null
        }
      }
      is_email_exist: {
        Args: {
          new_email: string
        }
        Returns: boolean
      }
      is_guest: {
        Args: {
          mobilenumber: string
        }
        Returns: boolean
      }
      json_urlencode: {
        Args: {
          "": Json
        }
        Returns: string
      }
      list_stored_countries: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string | null
        }[]
      }
      search_clients: {
        Args: {
          seachkey: number
          strvalue: string
          fname: string
        }
        Returns: {
          approved: boolean | null
          avatar: string | null
          country_id_type: Database["public"]["Enums"]["country_id_type"] | null
          country_identifier: string | null
          date_of_birth: string | null
          email: string | null
          external_id: string | null
          fintech_consent: string | null
          first_name: string | null
          gender: string | null
          id: string
          is_registered: boolean | null
          last_name: string | null
          marketing_consent: boolean
          middle_name: string | null
          nationality: string | null
          partner: string | null
          phone: string | null
          platform: string | null
          ref: number
          shared_consent: string | null
          updated_at: string | null
          verified: boolean | null
        }[]
      }
    }
    Enums: {
      clearing_account_job_status: "PROCESSING" | "FAILED" | "COMPLETE"
      clearing_account_job_type:
        | "DISBURSEMENTS"
        | "REPAYMENTS"
        | "DEPOSITS"
        | "WITHDRAWALS"
      country_id_type: "id" | "passport"
      lead_status:
        | "new"
        | "contacted"
        | "qualified"
        | "submitted"
        | "failed"
        | "successful"
        | "processing"
      order_type: "loan" | "credit" | "unknown"
      p2p_market_loan_schedule_status:
        | "PAID"
        | "SCHEDULED"
        | "PAIDLATE"
        | "LATE"
        | "PARTIAL"
      p2p_market_loan_status:
        | "ENDED"
        | "LATE_31_60"
        | "LATE_15_30"
        | "WAITS_ACCOUNTING"
        | "LATE_60_PLUS"
        | "decision"
        | "payout"
        | "active"
        | "finished"
        | "declined"
      p2p_market_scheduled_job_status:
        | "AWAITING_PROCESSING"
        | "COMPLETE"
        | "FAILED"
        | "PROCESSING"
      p2p_market_scheduled_job_type:
        | "UPLOAD"
        | "REPORT_REPAYMENT"
        | "BUY_BACK"
        | "UPDATE_INFO"
      partner_agent_documents:
        | "tax_certificate"
        | "photo"
        | "identification"
        | "inventory"
        | "financial_statement"
        | "good_conduct"
      product_type: "loan" | "credit"
      shop_order_status:
        | "submitted"
        | "rejected"
        | "processing"
        | "completed"
        | "fulfilled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
