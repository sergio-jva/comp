import type { TemplatePolicy } from "../types";

export const classificationPolicy: TemplatePolicy = {
	type: "doc",
	metadata: {
		id: "data_classification",
		slug: "data-classification-policy",
		name: "Data Classification Policy",
		description:
			"This policy outlines the requirements for data classification.",
		frequency: "yearly",
		department: "gov",
	},
	content: [
		{
			type: "heading",
			attrs: { level: 1 },
			content: [{ type: "text", text: "Data Classification Policy" }],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Policy Information" }],
		},
		{
			type: "table",
			content: [
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Organization" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Last Review" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Review Frequency" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Approved By" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Classification" }],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "{{organization}}" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "{{date}}" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Annual" }],
						},
						{
							type: "tableCell",
							content: [
								{ type: "text", text: "Chief Information Security Officer" },
							],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Confidential" }],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Purpose and Scope" }],
		},
		{
			type: "orderedList",
			attrs: { tight: true, start: 1 },
			content: [
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "This data classification policy defines the requirements to ensure that information within the organization is protected at an appropriate level.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "This document applies to the entire scope of the organization's information security program. It includes all types of information, regardless of its form, such as paper or electronic documents, applications and databases, and knowledge or information that is not written.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "This policy applies to all individuals and systems that have access to information kept by the organization.",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Background" }],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "This policy defines the high level objectives and implementation instructions for the organization's data classification scheme. This includes data classification levels, as well as procedures for the classification, labeling and handling of data within the organization. Confidentiality and non-disclosure agreements maintained by the organization must reference this policy.",
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Classification Levels" }],
		},
		{
			type: "table",
			content: [
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [
								{
									type: "paragraph",
									content: [
										{
											type: "text",
											marks: [{ type: "bold" }],
											text: "Confidentiality Level",
										},
									],
								},
							],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "paragraph",
									content: [
										{
											type: "text",
											marks: [{ type: "bold" }],
											text: "Label",
										},
									],
								},
							],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "paragraph",
									content: [
										{
											type: "text",
											marks: [{ type: "bold" }],
											text: "Classification Criteria",
										},
									],
								},
							],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "paragraph",
									content: [
										{
											type: "text",
											marks: [{ type: "bold" }],
											text: "Access Restrictions",
										},
									],
								},
							],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Public" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "For Public Release" }],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Making the information public will not harm the organization in any way.",
								},
							],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Information is available to the public.",
								},
							],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Internal Use" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Internal Use" }],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Unauthorized access may cause minor damage and/or inconvenience to the organization.",
								},
							],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Information is available to all employees and authorized third parties.",
								},
							],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Restricted" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Restricted" }],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Unauthorized access to information may cause considerable damage to the business and/or the organization's reputation.",
								},
							],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Information is available to a specific group of employees and authorized third parties.",
								},
							],
						},
					],
				},
				{
					type: "tableRow",
					content: [
						{
							type: "tableCell",
							content: [{ type: "text", text: "Confidential" }],
						},
						{
							type: "tableCell",
							content: [{ type: "text", text: "Confidential" }],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Unauthorized access to information may cause catastrophic damage to business and/or the organization's reputation.",
								},
							],
						},
						{
							type: "tableCell",
							content: [
								{
									type: "text",
									text: "Information is available only to specific individuals in the organization.",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Policy" }],
		},
		{
			type: "orderedList",
			attrs: { tight: true, start: 1 },
			content: [
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "If classified information is received from outside the organization, the person who receives the information must classify it in accordance with the rules prescribed in this policy. The person thereby will become the owner of the information.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "If classified information is received from outside the organization and handled as part of business operations activities (e.g., customer data on provided cloud services), the information classification, as well as the owner of such information, must be made in accordance with the specifications of the respective customer service agreement and other legal requirements.",
								},
							],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{
									type: "text",
									text: "When classifying information, the level of confidentiality is determined by:",
								},
							],
						},
						{
							type: "orderedList",
							attrs: { tight: true, start: 1 },
							content: [
								{
									type: "listItem",
									content: [
										{
											type: "paragraph",
											content: [
												{ type: "text", text: " Value" },
												{ type: "text", text: ": " },
												{
													type: "text",
													text: "The value of the information, based on impacts identified during the risk assessment process.",
												},
											],
										},
									],
								},
								{
									type: "listItem",
									content: [
										{
											type: "paragraph",
											content: [
												{ type: "text", text: " Sensitivity" },
												{ type: "text", text: ": " },
												{
													type: "text",
													text: "Sensitivity and criticality of the information, based on the highest risk calculated for each information item during the risk assessment.",
												},
											],
										},
									],
								},
								{
									type: "listItem",
									content: [
										{
											type: "paragraph",
											content: [
												{ type: "text", text: " Legal obligations" },
												{ type: "text", text: ": " },
												{
													type: "text",
													text: "Legal, regulatory and contractual obligations.",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			type: "heading",
			attrs: { level: 2 },
			content: [{ type: "text", text: "Appendices" }],
		},
		{
			type: "heading",
			attrs: { level: 3 },
			content: [
				{
					type: "text",
					text: "Appendix A: Handling of Classified Information",
				},
			],
		},
		{
			type: "paragraph",
			content: [
				{
					type: "text",
					text: "Information and information systems must be handled according to detailed guidelines covering:",
				},
			],
		},
		{
			type: "bulletList",
			content: [
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [{ type: "text", text: "Paper Documents" }],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [{ type: "text", text: "Electronic Documents" }],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [{ type: "text", text: "Information Systems" }],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [{ type: "text", text: "Electronic Mail" }],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [{ type: "text", text: "Electronic Storage Media" }],
						},
					],
				},
				{
					type: "listItem",
					content: [
						{
							type: "paragraph",
							content: [
								{ type: "text", text: "Information Transmitted Orally" },
							],
						},
					],
				},
			],
		},
	],
};
