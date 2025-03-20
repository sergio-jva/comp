export default {
  language: {
    title: "Languages",
    description: "Change the language used in the user interface.",
    placeholder: "Select language",
  },
  languages: {
    en: "English",
    es: "Spanish",
    fr: "French",
    no: "Norwegian",
    pt: "Portuguese",
  },
  common: {
    frequency: {
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      quarterly: "Quarterly",
      yearly: "Yearly",
    },
    notifications: {
      inbox: "Inbox",
      archive: "Archive",
      archive_all: "Archive all",
      no_notifications: "No new notifications",
    },
    actions: {
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      clear: "Clear",
      create: "Create",
      addNew: "Add New",
      send: "Send",
      return: "Return",
      success: "Success",
      error: "Error",
      next: "Next",
      complete: "Complete",
    },
    assignee: {
      label: "Assignee",
      placeholder: "Select assignee",
    },
    date: {
      pick: "Pick a date",
      due_date: "Due Date",
    },
    status: {
      open: "Open",
      pending: "Pending",
      closed: "Closed",
      archived: "Archived",
      compliant: "Compliant",
      non_compliant: "Non Compliant",
      not_started: "Not Started",
      in_progress: "In Progress",
      published: "Published",
      needs_review: "Needs Review",
      draft: "Draft",
      not_assessed: "Not Assessed",
      assessed: "Assessed",
      active: "Active",
      inactive: "Inactive",
      title: "Status",
    },
    filters: {
      clear: "Clear filters",
      search: "Search...",
      status: "Status",
      department: "Department",
      owner: {
        label: "Assignee",
        placeholder: "Filter by assignee",
      },
    },
    table: {
      title: "Title",
      status: "Status",
      assigned_to: "Assigned To",
      due_date: "Due Date",
      last_updated: "Last Updated",
      no_results: "No results found",
    },
    empty_states: {
      no_results: {
        title: "No results found",
        title_tasks: "No tasks found",
        title_risks: "No risks found",
        description: "Try another search, or adjusting the filters",
        description_filters: "Try another search, or adjusting the filters",
        description_no_tasks: "Create a task to get started",
        description_no_risks: "Create a risk to get started",
      },
      no_items: {
        title: "No items found",
        description: "Try adjusting your search or filters",
      },
    },
    pagination: {
      of: "of",
      items_per_page: "Items per page",
      rows_per_page: "Rows per page",
      page_x_of_y: "Page {{current}} of {{total}}",
      go_to_first_page: "Go to first page",
      go_to_previous_page: "Go to previous page",
      go_to_next_page: "Go to next page",
      go_to_last_page: "Go to last page",
    },
    comments: {
      title: "Comments",
      description: "Add a comment using the form below.",
      add: "New Comment",
      new: "New Comment",
      save: "Save Comment",
      success: "Comment added successfully",
      error: "Failed to add comment",
      placeholder: "Write your comment here...",
      empty: {
        title: "No comments yet",
        description: "Be the first to add a comment",
      },
    },
    upload: {
      fileUpload: {
        uploadingText: "Uploading...",
        uploadingFile: "Uploading file...",
        dropFileHere: "Drop file here",
        dropFileHereAlt: "Drop file here",
        releaseToUpload: "Release to upload",
        addFiles: "Add Files",
        uploadAdditionalEvidence: "Upload a file or document",
        dragDropOrClick: "Drag and drop or click to browse",
        dragDropOrClickToSelect: "Drag and drop or click to select file",
        maxFileSize: "Max file size: {size}MB",
      },
      fileUrl: {
        additionalLinks: "Additional Links",
        add: "Add",
        linksAdded: "{count} link{s} added",
        enterUrl: "Enter URL",
        addAnotherLink: "Add Another Link",
        saveLinks: "Save Links",
        urlBadge: "URL",
        copyLink: "Copy Link",
        openLink: "Open Link",
        deleteLink: "Delete Link",
      },
      fileCard: {
        preview: "Preview",
        filePreview: "File Preview: {fileName}",
        previewNotAvailable: "Preview not available for this file type",
        openFile: "Open File",
        deleteFile: "Delete File",
        deleteFileConfirmTitle: "Delete File",
        deleteFileConfirmDescription:
          "This action cannot be undone. The file will be permanently deleted.",
      },
      fileSection: {
        filesUploaded: "{count} files uploaded",
      },
    },
    attachments: {
      title: "Attachments",
      description: "Add a file by clicking 'Add Attachment'.",
      upload: "Upload attachment",
      upload_description:
        "Upload an attachment or add a link to an external resource.",
      drop: "Drop the files here",
      drop_description:
        "Drop files here or click to choose files from your device.",
      drop_files_description: "Files can be up to ",
      empty: {
        title: "No attachments",
        description: "Add a file by clicking 'Add Attachment'.",
      },
      toasts: {
        error: "Something went wrong, please try again.",
        error_uploading_files: "Cannot upload more than 1 file at a time",
        error_uploading_files_multiple: "Cannot upload more than 10 files",
        error_no_files_selected: "No files selected",
        error_file_rejected: "File {file} was rejected",
        error_failed_to_upload_files: "Failed to upload files",
        error_failed_to_upload_files_multiple: "Failed to upload files",
        error_failed_to_upload_files_single: "Failed to upload file",
        success_uploading_files: "Files uploaded successfully",
        success_uploading_files_multiple: "Files uploaded successfully",
        success_uploading_files_single: "File uploaded successfully",
        success_uploading_files_target: "Files uploaded",
        uploading_files: "Uploading {target}...",
        remove_file: "Remove file",
      },
    },
    edit: "Edit",
    errors: {
      unexpected_error: "An unexpected error occurred",
    },
    description: "Description",
    last_updated: "Last Updated",
  },
  header: {
    discord: {
      button: "Join us on Discord",
    },
    feedback: {
      button: "Feedback",
      title: "Thank you for your feedback!",
      description: "We will be back with you as soon as possible",
      placeholder: "Ideas to improve this page or issues you are experiencing.",
      success: "Thank you for your feedback!",
      error: "Error sending feedback - try again?",
      send: "Send Feedback",
    },
  },
  not_found: {
    title: "404 - Page not found",
    description: "The page you are looking for does not exist.",
    return: "Return to dashboard",
  },
  theme: {
    options: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },
  sidebar: {
    overview: "Overview",
    policies: "Policies",
    risk: "Risk Management",
    vendors: "Vendors",
    integrations: "Integrations",
    settings: "Settings",
    evidence: "Evidence Tasks",
    people: "People",
    tests: "Cloud Tests",
  },
  sub_pages: {
    evidence: {
      title: "Evidence",
      list: "Evidence List",
      overview: "Evidence Overview",
    },
    risk: {
      overview: "Risk Management",
      register: "Risk Register",
      risk_overview: "Risk Overview",
      risk_comments: "Risk Comments",
      tasks: {
        task_overview: "Task Overview",
      },
    },
    policies: {
      all: "All Policies",
      editor: "Policy Editor",
      policy_details: "Policy Details",
    },
    people: {
      all: "People",
      employee_details: "Employee Details",
    },
    settings: {
      members: "Team Members",
    },
    frameworks: {
      overview: "Frameworks",
    },
    tests: {
      overview: "Cloud Tests",
      test_details: "Test Details",
    },
    vendors: {
      overview: "Vendors",
      register: "Vendor Register",
    },
  },
  auth: {
    title: "Automate SOC 2, ISO 27001 and GDPR compliance with AI.",
    description:
      "Create a free account or log in with an existing account to continue.",
    options: "More options",
    google: "Continue with Google",
    email: {
      description: "Enter your email address to continue.",
      placeholder: "Enter email address",
      button: "Continue with email",
      magic_link_sent: "Magic link sent",
      magic_link_description: "Check your inbox for a magic link.",
      magic_link_try_again: "Try again.",
      success: "Email sent - check your inbox!",
      error: "Error sending email - try again?",
    },
    terms:
      "By clicking continue, you acknowledge that you have read and agree to the Terms of Service and Privacy Policy.",
  },
  onboarding: {
    title: "Create an organization",
    submit: "Finish setup",
    setup: "Welcome to Comp AI",
    description:
      "Tell us a bit about your organization and what framework(s) you want to get started with.",
    trigger: {
      title: "Hold tight, we're creating your organization",
      creating: "This may take a minute or two...",
      completed: "Organization created successfully",
      continue: "Continue to dashboard",
      error: "Something went wrong, please try again.",
    },
    fields: {
      fullName: {
        label: "Your Name",
        placeholder: "Your full name",
      },
      name: {
        label: "Organization Name",
        placeholder: "Your organization name",
      },
      subdomain: {
        label: "Subdomain",
        placeholder: "example",
      },
      website: {
        label: "Website",
        placeholder: "Your organization website",
      },
    },
    success: "Thanks, you're all set!",
    error: "Something went wrong, please try again.",
    check_availability: "Checking availability",
    available: "Available",
    unavailable: "Unavailable",
    creating: "Creating your organization...",
  },
  overview: {
    title: "Overview",
    framework_chart: {
      title: "Framework Progress",
    },
    requirement_chart: {
      title: "Compliance Status",
    },
  },
  policies: {
    dashboard: {
      title: "Dashboard",
      all: "All Policies",
      policy_status: "Policy by Status",
      policies_by_assignee: "Policies by Assignee",
      policies_by_framework: "Policies by Framework",
      sub_pages: {
        overview: "Overview",
        edit_policy: "Edit Policy",
      },
    },
    overview: {
      title: "Policy Overview",
      form: {
        update_policy: "Update Policy",
        update_policy_description: "Update the policy title or description.",
        update_policy_success: "Policy updated successfully",
        update_policy_error: "Failed to update policy",
        update_policy_title: "Policy Name",
        review_frequency: "Review Frequency",
        review_frequency_placeholder: "Select a review frequency",
        review_date: "Review Date",
        review_date_placeholder: "Select a review date",
        required_to_sign: "Required to be signed by employees",
        signature_required: "Require employees signature",
        signature_not_required: "Do not ask employees to sign",
        signature_requirement: "Signature Requirement",
        signature_requirement_placeholder: "Select signature requirement",
      },
    },
    new: {
      success: "Policy successfully created",
      error: "Failed to create policy",
      details: "Policy Details",
      title: "Enter a title for the policy",
      description: "Enter a description for the policy",
    },
    table: {
      name: "Policy Name",
      statuses: {
        draft: "Draft",
        published: "Published",
        archived: "Archived",
      },
      filters: {
        owner: {
          label: "Assignee",
          placeholder: "Filter by assignee",
        },
      },
    },
    filters: {
      search: "Search policies...",
      all: "All Policies",
    },
    status: {
      draft: "Draft",
      published: "Published",
      needs_review: "Needs Review",
      archived: "Archived",
      relevant: "Relevant",
      "not-relevant": "Not Relevant",
    },
    policies: "policies",
    title: "Policies",
    create_new: "Create New Policy",
    search_placeholder: "Search policies...",
    status_filter: "Filter by status",
    all_statuses: "All statuses",
    no_policies_title: "No policies yet",
    no_policies_description: "Get started by creating your first policy",
    create_first: "Create first policy",
    no_description: "No description provided",
    last_updated: "Last updated: {{date}}",
    save: "Save",
    saving: "Saving...",
    saved_success: "Policy saved successfully",
    saved_error: "Failed to save policy",
  },
  evidence_tasks: {
    evidence_tasks: "Evidence Tasks",
    overview: "Overview",
  },
  risk: {
    risks: "risks",
    overview: "Overview",
    create: "Create New Risk",
    vendor: {
      title: "Vendor Management",
      dashboard: {
        title: "Vendor Dashboard",
        overview: "Vendor Overview",
        vendor_status: "Vendor Status",
        vendor_category: "Vendor Categories",
        vendors_by_assignee: "Vendors by Assignee",
        inherent_risk_description:
          "Initial risk level before any controls are applied",
        residual_risk_description:
          "Remaining risk level after controls are applied",
      },
      register: {
        title: "Vendor Register",
        table: {
          name: "Name",
          category: "Category",
          status: "Status",
          owner: "Owner",
        },
      },
      assessment: {
        title: "Vendor Assessment",
        update_success: "Vendor risk assessment updated successfully",
        update_error: "Failed to update vendor risk assessment",
        inherent_risk: "Inherent Risk",
        residual_risk: "Residual Risk",
      },
      form: {
        vendor_details: "Vendor Details",
        vendor_name: "Name",
        vendor_name_placeholder: "Enter vendor name",
        vendor_website: "Website",
        vendor_website_placeholder: "Enter vendor website",
        vendor_description: "Description",
        vendor_description_placeholder: "Enter vendor description",
        vendor_category: "Category",
        vendor_category_placeholder: "Select category",
        vendor_status: "Status",
        vendor_status_placeholder: "Select status",
        create_vendor_success: "Vendor created successfully",
        create_vendor_error: "Failed to create vendor",
        update_vendor: "Update Vendor",
        update_vendor_success: "Vendor updated successfully",
        update_vendor_error: "Failed to update vendor",
        add_comment: "Add Comment",
      },
      table: {
        name: "Name",
        category: "Category",
        status: "Status",
        owner: "Owner",
      },
      filters: {
        search_placeholder: "Search vendors...",
        status_placeholder: "Filter by status",
        category_placeholder: "Filter by category",
        owner_placeholder: "Filter by owner",
      },
      empty_states: {
        no_vendors: {
          title: "No vendors yet",
          description: "Get started by creating your first vendor",
        },
        no_results: {
          title: "No results found",
          description: "No vendors match your search",
          description_with_filters: "Try adjusting your filters",
        },
      },
      actions: {
        create: "Create Vendor",
      },
      status: {
        not_assessed: "Not Assessed",
        in_progress: "In Progress",
        assessed: "Assessed",
      },
      category: {
        cloud: "Cloud",
        infrastructure: "Infrastructure",
        software_as_a_service: "Software as a Service",
        finance: "Finance",
        marketing: "Marketing",
        sales: "Sales",
        hr: "HR",
        other: "Other",
      },
      risk_level: {
        low: "Low Risk",
        medium: "Medium Risk",
        high: "High Risk",
        unknown: "Unknown Risk",
      },
    },
    dashboard: {
      title: "Dashboard",
      overview: "Risk Overview",
      risk_status: "Risk Status",
      risks_by_department: "Risks by Department",
      risks_by_assignee: "Risks by Assignee",
      inherent_risk_description:
        "Inherent risk is calculated as likelihood * impact. Calculated before any controls are applied.",
      residual_risk_description:
        "Residual risk is calculated as likelihood * impact. This is the risk level after controls are applied.",
      risk_assessment_description: "Compare inherent and residual risk levels",
    },
    register: {
      title: "Risk Register",
      table: {
        risk: "Risk",
      },
      empty: {
        no_risks: {
          title: "Create a risk to get started",
          description:
            "Track and score risks, create and assign mitigation tasks for your team, and manage your risk register all in one simple interface.",
        },
        create_risk: "Create a risk",
      },
    },
    metrics: {
      probability: "Probability",
      impact: "Impact",
      inherentRisk: "Inherent Risk",
      residualRisk: "Residual Risk",
    },
    form: {
      update_inherent_risk: "Save Inherent Risk",
      update_inherent_risk_description:
        "Update the inherent risk of the risk. This is the risk level before any controls are applied.",
      update_inherent_risk_success: "Inherent risk updated successfully",
      update_inherent_risk_error: "Failed to update inherent risk",
      update_residual_risk: "Save Residual Risk",
      update_residual_risk_description:
        "Update the residual risk of the risk. This is the risk level after controls are applied.",
      update_residual_risk_success: "Residual risk updated successfully",
      update_residual_risk_error: "Failed to update residual risk",
      update_risk: "Update Risk",
      update_risk_description: "Update the risk title or description.",
      update_risk_success: "Risk updated successfully",
      update_risk_error: "Failed to update risk",
      create_risk_success: "Risk created successfully",
      create_risk_error: "Failed to create risk",
      risk_details: "Risk Details",
      risk_title: "Risk Title",
      risk_title_description: "Enter a name for the risk",
      risk_description: "Description",
      risk_description_description: "Enter a description for the risk",
      risk_category: "Category",
      risk_category_placeholder: "Select a category",
      risk_department: "Department",
      risk_department_placeholder: "Select a department",
      risk_status: "Risk Status",
      risk_status_placeholder: "Select a risk status",
    },
    tasks: {
      title: "Tasks",
      attachments: "Attachments",
      overview: "Task Overview",
      form: {
        title: "Task Details",
        task_title: "Task Title",
        status: "Task Status",
        status_placeholder: "Select a task status",
        task_title_description: "Enter a name for the task",
        description: "Description",
        description_description: "Enter a description for the task",
        due_date: "Due Date",
        due_date_description: "Select the due date for the task",
        success: "Task created successfully",
        error: "Failed to create task",
      },
      sheet: {
        title: "Create Task",
        update: "Update Task",
        update_description: "Update the task title or description.",
      },
      empty: {
        description_create:
          "Create a mitigation task for this risk, add a treatment plan, and assign it to a team member.",
      },
    },
  },
  people: {
    title: "People",
    details: {
      taskProgress: "Task Progress",
      tasks: "Tasks",
      noTasks: "No tasks assigned yet",
    },
    description: "Manage your team members and their roles.",
    filters: {
      search: "Search people...",
      role: "Filter by role",
    },
    actions: {
      invite: "Add Employee",
      clear: "Clear filters",
    },
    table: {
      name: "Name",
      email: "Email",
      department: "Department",
      externalId: "External ID",
      status: "Status",
    },
    empty: {
      no_employees: {
        title: "No employees yet",
        description: "Get started by inviting your first team member.",
      },
      no_results: {
        title: "No results found",
        description: "No employees match your search",
        description_with_filters: "Try adjusting your filters",
      },
    },
    invite: {
      title: "Add Employee",
      description: "Add an employee to your organization.",
      email: {
        label: "Email address",
        placeholder: "Enter email address",
      },
      role: {
        label: "Role",
        placeholder: "Select a role",
      },
      name: {
        label: "Name",
        placeholder: "Enter name",
      },
      department: {
        label: "Department",
        placeholder: "Select a department",
      },
      submit: "Add Employee",
      success: "Employee added successfully",
      error: "Failed to add employee",
    },
  },
  settings: {
    general: {
      title: "General",
      org_name: "Organization name",
      org_name_description:
        "This is your organizations visible name. You should use the legal name of your organization.",
      org_name_tip: "Please use 32 characters at maximum.",
      org_website: "Organization Website",
      org_website_description:
        "This is your organization's official website URL. Make sure to include the full URL with https://.",
      org_website_tip: "Please enter a valid URL including https://",
      org_website_error: "Error updating organization website",
      org_website_updated: "Organization website updated",
      org_delete: "Delete organization",
      org_delete_description:
        "Permanently remove your organization and all of its contents from the Comp AI platform. This action is not reversible - please continue with caution.",
      org_delete_alert_title: "Are you absolutely sure?",
      org_delete_alert_description:
        "This action cannot be undone. This will permanently delete your organization and remove your data from our servers.",
      org_delete_error: "Error deleting organization",
      org_delete_success: "Organization deleted",
      org_name_updated: "Organization name updated",
      org_name_error: "Error updating organization name",
      save_button: "Save",
      delete_button: "Delete",
      delete_confirm: "DELETE",
      delete_confirm_tip: "Type DELETE to confirm.",
      cancel_button: "Cancel",
    },
    members: {
      title: "Members",
    },
    api_keys: {
      title: "API",
      description:
        "Manage API keys for programmatic access to your organization's data.",
      list_title: "API Keys",
      list_description:
        "API keys allow secure access to your organization's data via our API.",
      create: "New API Key",
      create_title: "New API Key",
      create_description:
        "Create a new API key for programmatic access to your organization's data.",
      created_title: "API Key Created",
      created_description:
        "Your API key has been created. Make sure to copy it now as you won't be able to see it again.",
      name: "Name",
      name_label: "Name",
      name_placeholder: "Enter a name for this API key",
      expiration: "Expiration",
      expiration_placeholder: "Select expiration",
      expires_label: "Expires",
      expires_placeholder: "Select expiration",
      expires_30days: "30 days",
      expires_90days: "90 days",
      expires_1year: "1 year",
      expires_never: "Never",
      thirty_days: "30 days",
      ninety_days: "90 days",
      one_year: "1 year",
      your_key: "Your API Key",
      api_key: "API Key",
      save_warning:
        "This key will only be shown once. Make sure to copy it now.",
      copied: "API key copied to clipboard",
      close_confirm:
        "Are you sure you want to close? You won't be able to see this API key again.",
      revoke_confirm:
        "Are you sure you want to revoke this API key? This action cannot be undone.",
      revoke_title: "Revoke API Key",
      revoke: "Revoke",
      created: "Created",
      expires: "Expires",
      last_used: "Last Used",
      actions: "Actions",
      never: "Never",
      never_used: "Never used",
      no_keys: "No API keys found. Create one to get started.",
      security_note:
        "API keys provide full access to your organization's data. Keep them secure and rotate them regularly.",
      fetch_error: "Failed to fetch API keys",
      create_error: "Failed to create API key",
      revoked_success: "API key revoked successfully",
      revoked_error: "Failed to revoke API key",
      done: "Done",
    },
    billing: {
      title: "Billing",
    },
    team: {
      tabs: {
        members: "Team Members",
        invite: "Invite Members",
      },
      members: {
        title: "Team Members",
        description: "Manage your team members and their roles",
        empty: {
          no_organization: {
            title: "No Organization",
            description: "You are not part of any organization",
          },
          no_members: {
            title: "No Members",
            description: "There are no active members in your organization",
          },
        },
        role: {
          owner: "Owner",
          admin: "Admin",
          member: "Member",
          viewer: "Viewer",
        },
      },
      invitations: {
        title: "Pending Invitations",
        description: "Users who have been invited but haven't accepted yet",
        empty: {
          no_organization: {
            title: "No Organization",
            description: "You are not part of any organization",
          },
          no_invitations: {
            title: "No Pending Invitations",
            description: "There are no pending invitations",
          },
        },
        invitation_sent: "Invitation sent",
        actions: {
          resend: "Resend Invite",
          sending: "Sending Invite",
          revoke: "Revoke",
          revoke_title: "Revoke Invitation",
          revoke_description_prefix:
            "Are you sure you want to revoke the invitation for",
          revoke_description_suffix: "This action cannot be undone.",
        },
        toast: {
          resend_success_prefix: "An invitation email has been sent to",
          resend_error: "Failed to send invitation",
          resend_unexpected:
            "An unexpected error occurred while sending the invitation",
          revoke_success_prefix: "Invitation to",
          revoke_success_suffix: "has been revoked",
          revoke_error: "Failed to revoke invitation",
          revoke_unexpected:
            "An unexpected error occurred while revoking the invitation",
        },
      },
      invite: {
        title: "Invite Team Member",
        description:
          "Send an invitation to a new team member to join your organization",
        form: {
          email: {
            label: "Email",
            placeholder: "member@example.com",
            error: "Please enter a valid email address",
          },
          role: {
            label: "Role",
            placeholder: "Select a role",
            error: "Please select a role",
          },
          department: {
            label: "Department",
            placeholder: "Select a department",
            error: "Please select a department",
          },
          departments: {
            none: "None",
            it: "IT",
            hr: "HR",
            admin: "Admin",
            gov: "Government",
            itsm: "ITSM",
            qms: "QMS",
          },
        },
        button: {
          send: "Send Invitation",
          sending: "Sending invitation...",
          sent: "Invitation Sent",
        },
        toast: {
          error: "Failed to send invitation",
          unexpected:
            "An unexpected error occurred while sending the invitation",
        },
      },
      member_actions: {
        actions: "Actions",
        change_role: "Change Role",
        remove_member: "Remove Member",
        remove_confirm: {
          title: "Remove Team Member",
          description_prefix: "Are you sure you want to remove",
          description_suffix: "This action cannot be undone.",
        },
        role_dialog: {
          title: "Change Role",
          description_prefix: "Update the role for",
          role_label: "Role",
          role_placeholder: "Select a role",
          role_descriptions: {
            admin: "Admins can manage team members and settings.",
            member:
              "Members can use all features but cannot manage team members.",
            viewer: "Viewers can only view content without making changes.",
          },
          cancel: "Cancel",
          update: "Update Role",
        },
        toast: {
          remove_success: "has been removed from the organization",
          remove_error: "Failed to remove member",
          remove_unexpected:
            "An unexpected error occurred while removing the member",
          update_role_success: "has had their role updated to",
          update_role_error: "Failed to update member role",
          update_role_unexpected:
            "An unexpected error occurred while updating the member's role",
        },
      },
    },
  },
  tests: {
    dashboard: {
      overview: "Overview",
      all: "All Tests",
      tests_by_assignee: "Tests by Assignee",
      passed: "Passed",
      failed: "Failed",
      severity_distribution: "Test Severity Distribution",
    },
    severity: {
      info: "Info",
      low: "Low",
      medium: "Medium",
      high: "High",
      critical: "Critical",
    },
    name: "Cloud Tests",
    title: "Cloud Tests",
    actions: {
      create: "Add Cloud Test",
      clear: "Clear filters",
      refresh: "Refresh",
      refresh_success: "Tests refreshed successfully",
      refresh_error: "Failed to refresh tests",
    },
    empty: {
      no_tests: {
        title: "No cloud tests yet",
        description: "Get started by creating your first cloud test.",
      },
      no_results: {
        title: "No results found",
        description: "No tests match your search",
        description_with_filters: "Try adjusting your filters",
      },
    },
    filters: {
      search: "Search tests...",
      role: "Filter by vendor",
    },
    register: {
      title: "Add Cloud Test",
      description: "Configure a new cloud compliance test.",
      submit: "Create Test",
      success: "Test created successfully",
      invalid_json: "Invalid JSON configuration provided",

      title_field: {
        label: "Test Title",
        placeholder: "Enter test title",
      },
      description_field: {
        label: "Description",
        placeholder: "Enter test description",
      },
      provider: {
        label: "Cloud Provider",
        placeholder: "Select cloud provider",
      },
      config: {
        label: "Test Configuration",
        placeholder: "Enter JSON configuration for the test",
      },
      auth_config: {
        label: "Authentication Configuration",
        placeholder: "Enter JSON authentication configuration",
      },
    },
    table: {
      title: "Title",
      provider: "Provider",
      status: "Status",
      severity: "Severity",
      result: "Result",
      createdAt: "Created At",
      assignedUser: "Assigned User",
      assignedUserEmpty: "Not Assigned",
      no_results: "No results found",
    },
  },
  user_menu: {
    theme: "Theme",
    language: "Language",
    sign_out: "Sign out",
    account: "Account",
    support: "Support",
    settings: "Settings",
    teams: "Teams",
  },
  frameworks: {
    title: "Frameworks",
    overview: {
      error: "Failed to load frameworks",
      loading: "Loading frameworks...",
      empty: {
        title: "No frameworks selected",
        description:
          "Select frameworks to get started with your compliance journey",
      },
      progress: {
        title: "Framework Progress",
        empty: {
          title: "No frameworks yet",
          description:
            "Get started by adding a compliance framework to track your progress",
          action: "Add Framework",
        },
      },
      grid: {
        welcome: {
          title: "Welcome to Comp AI",
          description:
            "Get started by selecting the compliance frameworks you would like to implement. We'll help you manage and track your compliance journey across multiple standards.",
          action: "Get Started",
        },
        title: "Select Frameworks",
        version: "Version",
        actions: {
          clear: "Clear",
          confirm: "Confirm Selection",
        },
      },
    },
    controls: {
      title: "Controls",
      description: "Review and manage compliance controls",
      table: {
        status: "Status",
        control: "Control",
        artifacts: "Artifacts",
        actions: "Actions",
      },
      statuses: {
        completed: "Completed",
        in_progress: "In Progress",
        not_started: "Not Started",
      },
    },
  },
  errors: {
    unexpected: "Something went wrong, please try again",
    unauthorized: {
      title: "Unauthorized Access",
      description: "You don't have permission to access this resource. Please contact your administrator if you believe this is a mistake.",
      back: "Return to Home"
    }
  },
  editor: {
    ai: {
      thinking: "AI is thinking",
      thinking_spinner: "AI is thinking",
      edit_or_generate: "Edit or generate...",
      tell_ai_what_to_do_next: "Tell AI what to do next",
      request_limit_reached: "You have reached your request limit for the day.",
    },
    ai_selector: {
      improve: "Improve writing",
      fix: "Fix grammar",
      shorter: "Make shorter",
      longer: "Make longer",
      continue: "Continue writing",
      replace: "Replace selection",
      insert: "Insert below",
      discard: "Discard",
    },
  },
  evidence: {
    title: "Evidence",
    list: "All Evidence",
    overview: "Evidence Overview",
    edit: "Edit Evidence",
    dashboard: {
      layout: "Dashboard",
      layout_back_button: "Back",
      title: "Evidence Dashboard",
      by_department: "By Department",
      by_assignee: "By Assignee",
      by_framework: "By Framework",
    },
    items: "items",
    status: {
      up_to_date: "Up to Date",
      needs_review: "Needs Review",
      draft: "Draft",
      empty: "Empty",
    },
    departments: {
      none: "Uncategorized",
      admin: "Administration",
      gov: "Governance",
      hr: "Human Resources",
      it: "Information Technology",
      itsm: "IT Service Management",
      qms: "Quality Management",
    },
    details: {
      review_section: "Review Information",
      content: "Evidence Content",
    },
  },
  vendors: {
    title: "Vendors",
    dashboard: {
      title: "Overview",
    },
    register: {
      title: "Vendor Register",
      create_new: "Create Vendor",
    },
  },
  dashboard: {
    risk_status: "Risk Status",
    risks_by_department: "Risks by Department",
    vendor_status: "Vendor Status",
    vendors_by_category: "Vendors by Category",
  },
} as const;
