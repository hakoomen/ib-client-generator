export interface paths {
    "/api/AccountType/List": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AccountTypes.Queries.GetAccountTypes.GetAccountTypesQuery"];
                    "text/json": components["schemas"]["Application.AccountTypes.Queries.GetAccountTypes.GetAccountTypesQuery"];
                    "application/*+json": components["schemas"]["Application.AccountTypes.Queries.GetAccountTypes.GetAccountTypesQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.AccountTypes.AccountTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.AccountTypes.AccountTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.AccountTypes.AccountTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Admin/ClearApprovedDate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AdminOperations.Commands.ClearApproved.ClearApprovedCommand"];
                    "text/json": components["schemas"]["Application.AdminOperations.Commands.ClearApproved.ClearApprovedCommand"];
                    "application/*+json": components["schemas"]["Application.AdminOperations.Commands.ClearApproved.ClearApprovedCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Admin/ResetKYCRequest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AdminOperations.Commands.ResetKYCRequest.ResetKYCRequestCommand"];
                    "text/json": components["schemas"]["Application.AdminOperations.Commands.ResetKYCRequest.ResetKYCRequestCommand"];
                    "application/*+json": components["schemas"]["Application.AdminOperations.Commands.ResetKYCRequest.ResetKYCRequestCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetByNationalCode": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerByNationalCode.GetAuthRequestByNationalCodeQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerByNationalCode.GetAuthRequestByNationalCodeQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerByNationalCode.GetAuthRequestByNationalCodeQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.AuthRequestDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.AuthRequestDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.AuthRequestDto"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetById": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestById.GetAuthRequestByIdQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestById.GetAuthRequestByIdQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestById.GetAuthRequestByIdQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.AuthRequestDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.AuthRequestDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.AuthRequestDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetAuthRequests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequests.GetAuthRequestsQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequests.GetAuthRequestsQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequests.GetAuthRequestsQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestListDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestListDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestListDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetAuthRequestReport": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestReport.GetAuthRequestReportQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestReport.GetAuthRequestReportQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestReport.GetAuthRequestReportQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestReportDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestReportDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestReportDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetAuthRequestUnsuccessfulReport": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestUnsuccessfulReport.GetAuthRequestUnsuccessfulReportQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestUnsuccessfulReport.GetAuthRequestUnsuccessfulReportQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestUnsuccessfulReport.GetAuthRequestUnsuccessfulReportQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestReportDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestReportDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestReportDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/ValidateOrderId": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    orderId?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/DeterminingSituation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.DeterminingSituationCommands.DeterminingSituationCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.DeterminingSituationCommands.DeterminingSituationCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.DeterminingSituationCommands.DeterminingSituationCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/DeterminingSituationCustomerNumber": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.DeterminingSituationCustomerNumberCommands.DeterminingSituationCustomerNumberCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.DeterminingSituationCustomerNumberCommands.DeterminingSituationCustomerNumberCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.DeterminingSituationCustomerNumberCommands.DeterminingSituationCustomerNumberCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GnafAddressUpdate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.GnafAddressCommands.GnafAddressCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.GnafAddressCommands.GnafAddressCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.GnafAddressCommands.GnafAddressCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": boolean;
                        "application/json": boolean;
                        "text/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/UpdateWorkflow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowOutputDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowOutputDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetCustomerAccount": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQueryOutputDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQueryOutputDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQueryOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetRejectionReasons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.RejectionReasons.Queries.RejectionReasonQuery"];
                    "text/json": components["schemas"]["Application.RejectionReasons.Queries.RejectionReasonQuery"];
                    "application/*+json": components["schemas"]["Application.RejectionReasons.Queries.RejectionReasonQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.RejectionReasons.Queries.RejectionReasonOutputDto"][];
                        "application/json": components["schemas"]["Application.RejectionReasons.Queries.RejectionReasonOutputDto"][];
                        "text/json": components["schemas"]["Application.RejectionReasons.Queries.RejectionReasonOutputDto"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/ConfirmationCustomerKYC": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCOutputDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCOutputDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/VerifyCardInformationForIssuance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationOutputDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationOutputDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/RejectCardInformationForIssuance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationOutputDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationOutputDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/UpdateGNAFForCard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardOutputDto"];
                        "application/json": components["schemas"]["Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardOutputDto"];
                        "text/json": components["schemas"]["Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/getauthrequestsasexcel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestsAsExcel.GetAuthRequestsAsExcelQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestsAsExcel.GetAuthRequestsAsExcelQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetAuthRequestsAsExcel.GetAuthRequestsAsExcelQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/GetReportTypes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Queries.GetReportTypes.GetReportTypesQuery"];
                    "text/json": components["schemas"]["Application.AuthRequests.Queries.GetReportTypes.GetReportTypesQuery"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Queries.GetReportTypes.GetReportTypesQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.AuthRequests.Queries.GetReportTypes.GetReportTypesOutputDto"][];
                        "application/json": components["schemas"]["Application.AuthRequests.Queries.GetReportTypes.GetReportTypesOutputDto"][];
                        "text/json": components["schemas"]["Application.AuthRequests.Queries.GetReportTypes.GetReportTypesOutputDto"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/RejectStuckRecord": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.RejectStuckRecords.RejectStuckRecordCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.RejectStuckRecords.RejectStuckRecordCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.RejectStuckRecords.RejectStuckRecordCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/ResetStuckRecordInCreatinCustomerState": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingCustomerStateCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingCustomerStateCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingCustomerStateCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/AuthRequest/ResetStuckRecordInCreatingAccountState": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingAccountStateCommand"];
                    "text/json": components["schemas"]["Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingAccountStateCommand"];
                    "application/*+json": components["schemas"]["Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingAccountStateCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/CreateAuthRequest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/CreateAuthWithOTLRequest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/VerificationOTP": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.VerificationCommands.VerificationCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.VerificationCommands.VerificationCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.VerificationCommands.VerificationCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.VerificationCommands.VerificationOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.VerificationCommands.VerificationOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.VerificationCommands.VerificationOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/GetObligation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Queries.GetObligation.GetObligationQuery"];
                    "text/json": components["schemas"]["Application.BancsLinks.Queries.GetObligation.GetObligationQuery"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Queries.GetObligation.GetObligationQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.ObligationDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.ObligationDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.ObligationDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/SaveObligation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.SaveObligationCommands.SaveObligationCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.SaveObligationCommands.SaveObligationCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.SaveObligationCommands.SaveObligationCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": boolean;
                        "application/json": boolean;
                        "text/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/SaveAddress": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.SaveAddressCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.SaveAddressCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.SaveAddressCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": boolean;
                        "application/json": boolean;
                        "text/json": boolean;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/RequestCard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.RequestCardCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.RequestCardCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.RequestCardCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.RequestCards.RequestCardOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.RequestCardOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.RequestCardOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/SaveNationalCodeImage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.SaveNationalCodeImageCommands.SaveNationalCodeImageCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.SaveNationalCodeImageCommands.SaveNationalCodeImageCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.SaveNationalCodeImageCommands.SaveNationalCodeImageCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": string;
                        "application/json": string;
                        "text/json": string;
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/CustomerDidKycOperation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/GetCustomerHomeAddress": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressQuery"];
                    "text/json": components["schemas"]["Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressQuery"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/BancsLink/InquiryGNAFForCard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Queries.GetGNAFs.InquiryGNAFForCardQuery"];
                    "text/json": components["schemas"]["Application.BancsLinks.Queries.GetGNAFs.InquiryGNAFForCardQuery"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Queries.GetGNAFs.InquiryGNAFForCardQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Queries.InquiryGNAFForCards.InquiryGNAFForCardOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Queries.InquiryGNAFForCards.InquiryGNAFForCardOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Queries.InquiryGNAFForCards.InquiryGNAFForCardOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/BancsLink/CreateAuthRequest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/BancsLink/SaveAddress": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/BancsLink/RequestCard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.V2.RequestCardCommand"];
                    "text/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.V2.RequestCardCommand"];
                    "application/*+json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.V2.RequestCardCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.BancsLinks.Commands.RequestCards.V2.RequestCardOutputDto"];
                        "application/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.V2.RequestCardOutputDto"];
                        "text/json": components["schemas"]["Application.BancsLinks.Commands.RequestCards.V2.RequestCardOutputDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Branch/GetBranchesRelateToCity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.Branches.Queries.GetBranchesRelateToCityQuery"];
                    "text/json": components["schemas"]["Application.Branches.Queries.GetBranchesRelateToCityQuery"];
                    "application/*+json": components["schemas"]["Application.Branches.Queries.GetBranchesRelateToCityQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.Branches.Queries.BranchesRelateToCityOutputDto"][];
                        "application/json": components["schemas"]["Application.Branches.Queries.BranchesRelateToCityOutputDto"][];
                        "text/json": components["schemas"]["Application.Branches.Queries.BranchesRelateToCityOutputDto"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/Branch/GetBranches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameQuery"];
                    "text/json": components["schemas"]["Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameQuery"];
                    "application/*+json": components["schemas"]["Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameOutoutDto"][];
                        "application/json": components["schemas"]["Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameOutoutDto"][];
                        "text/json": components["schemas"]["Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameOutoutDto"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/City/List": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.Cities.Queries.GetCities.GetCitiesQuery"];
                    "text/json": components["schemas"]["Application.Cities.Queries.GetCities.GetCitiesQuery"];
                    "application/*+json": components["schemas"]["Application.Cities.Queries.GetCities.GetCitiesQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Cities.CityDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Cities.CityDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Cities.CityDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Job/List": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.Jobs.Queries.GetJobs.GetJobsQuery"];
                    "text/json": components["schemas"]["Application.Jobs.Queries.GetJobs.GetJobsQuery"];
                    "application/*+json": components["schemas"]["Application.Jobs.Queries.GetJobs.GetJobsQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Jobs.JobDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Jobs.JobDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Jobs.JobDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/JobDetail/List": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.JobDetails.Queries.GetJobDetails.GetJobDetailsQuery"];
                    "text/json": components["schemas"]["Application.JobDetails.Queries.GetJobDetails.GetJobDetailsQuery"];
                    "application/*+json": components["schemas"]["Application.JobDetails.Queries.GetJobDetails.GetJobDetailsQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.JobDetails.JobDetailDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.JobDetails.JobDetailDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.JobDetails.JobDetailDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/KYCRequest/SubmitResult": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.KYCRequests.Commands.SubmitResult.SubmitResultCommand"];
                    "text/json": components["schemas"]["Application.KYCRequests.Commands.SubmitResult.SubmitResultCommand"];
                    "application/*+json": components["schemas"]["Application.KYCRequests.Commands.SubmitResult.SubmitResultCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/KYCRequest/ResetJob": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Media/Save": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "multipart/form-data": {
                        /** Format: int64 */
                        AuthRequestId?: number;
                        /** Format: binary */
                        FormFile?: string;
                        MediaTypeId?: components["schemas"]["Domain.Contract.Enums.MediaTypeEnum"];
                    };
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Media/GetCustomerPic": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.Medias.Queries.GetMedia.GetMediaQuery"];
                    "text/json": components["schemas"]["Application.Medias.Queries.GetMedia.GetMediaQuery"];
                    "application/*+json": components["schemas"]["Application.Medias.Queries.GetMedia.GetMediaQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/OperatorAction/Create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.OperatorActions.Commands.CreateOperatorAction.CreateOperatorActionCommand"];
                    "text/json": components["schemas"]["Application.OperatorActions.Commands.CreateOperatorAction.CreateOperatorActionCommand"];
                    "application/*+json": components["schemas"]["Application.OperatorActions.Commands.CreateOperatorAction.CreateOperatorActionCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Province/List": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.Provinces.Queries.GetProvinces.GetProvincesQuery"];
                    "text/json": components["schemas"]["Application.Provinces.Queries.GetProvinces.GetProvincesQuery"];
                    "application/*+json": components["schemas"]["Application.Provinces.Queries.GetProvinces.GetProvincesQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Provinces.ProvinceDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Provinces.ProvinceDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Provinces.ProvinceDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/RequestType/List": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.RequestTypes.Queries.GetRequestTypes.GetRequestTypesQuery"];
                    "text/json": components["schemas"]["Application.RequestTypes.Queries.GetRequestTypes.GetRequestTypesQuery"];
                    "application/*+json": components["schemas"]["Application.RequestTypes.Queries.GetRequestTypes.GetRequestTypesQuery"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.RequestTypes.RequestTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "application/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.RequestTypes.RequestTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                        "text/json": components["schemas"]["Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.RequestTypes.RequestTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/RequestType/Get/{requestTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    requestTypeId: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": number;
                        "application/json": number;
                        "text/json": number;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Roles/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.RoleManagers.Commands.CreateRole.CreateRoleCommand"];
                    "text/json": components["schemas"]["Application.RoleManagers.Commands.CreateRole.CreateRoleCommand"];
                    "application/*+json": components["schemas"]["Application.RoleManagers.Commands.CreateRole.CreateRoleCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Roles/edit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.RoleManagers.Commands.EditRole.EditRoleCommand"];
                    "text/json": components["schemas"]["Application.RoleManagers.Commands.EditRole.EditRoleCommand"];
                    "application/*+json": components["schemas"]["Application.RoleManagers.Commands.EditRole.EditRoleCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Roles/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.RoleManagers.Commands.DeleteRole.DeleteRoleCommand"];
                    "text/json": components["schemas"]["Application.RoleManagers.Commands.DeleteRole.DeleteRoleCommand"];
                    "application/*+json": components["schemas"]["Application.RoleManagers.Commands.DeleteRole.DeleteRoleCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Roles/assignpermission": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.RoleManagers.Commands.AssignPermission.AssignPermissionCommand"];
                    "text/json": components["schemas"]["Application.RoleManagers.Commands.AssignPermission.AssignPermissionCommand"];
                    "application/*+json": components["schemas"]["Application.RoleManagers.Commands.AssignPermission.AssignPermissionCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Roles/roles/{pageNumber}/{pageSize}/{sort}/{filter}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    pageNumber: number;
                    pageSize: number;
                    sort: string;
                    filter: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Roles/permissions/{roleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    roleId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.UserManagers.Commands.CreateUser.CreateUserCommand"];
                    "text/json": components["schemas"]["Application.UserManagers.Commands.CreateUser.CreateUserCommand"];
                    "application/*+json": components["schemas"]["Application.UserManagers.Commands.CreateUser.CreateUserCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.UserManagers.Commands.EditUser.EditUserCommand"];
                    "text/json": components["schemas"]["Application.UserManagers.Commands.EditUser.EditUserCommand"];
                    "application/*+json": components["schemas"]["Application.UserManagers.Commands.EditUser.EditUserCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.UserManagers.Commands.DeleteUser.DeleteUserCommand"];
                    "text/json": components["schemas"]["Application.UserManagers.Commands.DeleteUser.DeleteUserCommand"];
                    "application/*+json": components["schemas"]["Application.UserManagers.Commands.DeleteUser.DeleteUserCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/assignrole": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.UserManagers.Commands.AssignRole.AssignRoleCommand"];
                    "text/json": components["schemas"]["Application.UserManagers.Commands.AssignRole.AssignRoleCommand"];
                    "application/*+json": components["schemas"]["Application.UserManagers.Commands.AssignRole.AssignRoleCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Application.UserManagers.Commands.LoginUser.LoginUserCommand"];
                    "text/json": components["schemas"]["Application.UserManagers.Commands.LoginUser.LoginUserCommand"];
                    "application/*+json": components["schemas"]["Application.UserManagers.Commands.LoginUser.LoginUserCommand"];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/users/{pageNumber}/{pageSize}/{sort}/{filter}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    pageNumber: number;
                    pageSize: number;
                    sort: string;
                    filter: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/roles/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    userId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/Users/suggestusers/{filter}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    filter: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Application.AccountTypes.AccountTypeDto": {
            id?: string | null;
            title?: string | null;
            hasCard?: boolean;
            isCurrency?: boolean;
            code?: string | null;
        };
        "Application.AccountTypes.Queries.GetAccountTypes.GetAccountTypesQuery": {
            /** Format: int32 */
            requestTypeId?: number | null;
        };
        "Application.AdminOperations.Commands.ClearApproved.ClearApprovedCommand": {
            /** Format: uuid */
            requestId?: string;
            token?: string | null;
        };
        "Application.AdminOperations.Commands.ResetKYCRequest.ResetKYCRequestCommand": {
            /** Format: uuid */
            authRequestId?: string;
            token?: string | null;
        };
        "Application.AuthRequests.AuthRequestDto": {
            /** Format: int64 */
            id?: number;
            /** Format: uuid */
            authRequestId?: string;
            customerNumber?: string | null;
            customerStatus?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            fatherName?: string | null;
            nationalCode?: string | null;
            birthCertificate?: string | null;
            birthCertificateSeries?: string | null;
            birthCertificateSerial?: string | null;
            birthCertificateCode?: string | null;
            birthCertificateDate?: string | null;
            accountNumber?: string | null;
            genderTitle?: string | null;
            phone?: string | null;
            mobile?: string | null;
            postalCode?: string | null;
            birthDate?: string | null;
            provinceTitle?: string | null;
            cityTitle?: string | null;
            branchCode?: string | null;
            branchName?: string | null;
            requestTypeTitle?: string | null;
            /** Format: int32 */
            accountTypeId?: number | null;
            accountTypeTitle?: string | null;
            applicationTitle?: string | null;
            agreement?: boolean;
            actionDate?: string | null;
            createDate?: string | null;
            modifiedDate?: string | null;
            workflowStatus?: components["schemas"]["Domain.Contract.Enums.WorkflowStatusEnum"];
            rowVersion?: string | null;
            requestCard?: boolean;
            sameHomeAddressForCard?: boolean | null;
            cardRequestAddress?: components["schemas"]["Application.AuthRequests.CardRequestAddressDto"];
            /** Format: int32 */
            applicationId?: number;
            sayahNo?: string | null;
            hasKyc?: boolean;
            channelResponse?: string | null;
            rejectionDescriptionByHuman?: string | null;
            /** Format: int32 */
            tryForOpeningAcc?: number;
            /** Format: int32 */
            tryForCreatingCustomer?: number;
            gnafAddress?: string | null;
            /** Format: double */
            imageMatchingRate?: number;
            /** Format: double */
            livenessMatchingRate?: number;
            readText?: string | null;
            nationalCardImageLink?: string | null;
            faceImageLink?: string | null;
            faceImageStatus?: string | null;
            signatureImageLink?: string | null;
            signatureImageStatus?: string | null;
            /** Format: double */
            voiceMatchingRate?: number;
            /** Format: double */
            videoLivnessRate?: number;
            videoLink?: string | null;
            videoStatus?: string | null;
            personalImageLink?: string | null;
            rejectionReason?: string | null;
            status?: string | null;
            village?: string | null;
            mainStreet?: string | null;
            alley?: string | null;
            birthCertificatePlace?: string | null;
            jobCode?: string | null;
            jobTitle?: string | null;
            jobDetailCode?: string | null;
            jobDetailTitle?: string | null;
            /** Format: uuid */
            sabtAhvalTrackingCode?: string;
            sabtAhvalDeathStatus?: boolean;
            sabtAhvalDeathDate?: string | null;
        };
        "Application.AuthRequests.AuthRequestListDto": {
            /** Format: int64 */
            id?: number;
            firstName?: string | null;
            lastName?: string | null;
            nationalCode?: string | null;
            provinceTitle?: string | null;
            cityTitle?: string | null;
            branchId?: string | null;
            createDate?: string | null;
            actionDate?: string | null;
            requestTypeTitle?: string | null;
            approvedTokenInfo?: string | null;
            tellerNo?: string | null;
            tellerBranchCode?: string | null;
            /** Format: date-time */
            approvedDate?: string | null;
            approvedDatePersian?: string | null;
            finalStatus?: string | null;
            authRequestStatus?: components["schemas"]["Domain.Contract.Enums.FinalStatusEnum"];
            workflowStatus?: components["schemas"]["Domain.Contract.Enums.WorkflowStatusEnum"];
            requestBranchCode?: string | null;
            requestBranchName?: string | null;
            accountNumber?: string | null;
            customerNumber?: string | null;
            rejectionReason?: string | null;
            /** Format: int32 */
            tryForOpeningAcc?: number;
            /** Format: int32 */
            tryForCreatingCustomer?: number;
        };
        "Application.AuthRequests.AuthRequestReportDto": {
            /** Format: int64 */
            id?: number;
            creatorUserId?: string | null;
            /** Format: int32 */
            branchId?: number;
            authRequestFullName?: string | null;
            fatherName?: string | null;
            nationalCode?: string | null;
            /** Format: date-time */
            createDate?: string;
            createDatePersian?: string | null;
            provinceTitle?: string | null;
            cityTitle?: string | null;
            personalInformationValidation?: string | null;
            mediaValidation?: string | null;
            addressValidation?: string | null;
            authRequestStatus?: boolean;
            description?: string | null;
        };
        "Application.AuthRequests.CardRequestAddressDto": {
            address?: string | null;
            postalCode?: string | null;
            provinceName?: string | null;
            cityName?: string | null;
            gnafAddress?: string | null;
        };
        "Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCCommand": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            jwt?: string | null;
        };
        "Application.AuthRequests.Commands.ConfirmationCustomerKYCs.CustomerConfirmationKYCOutputDto": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            workflowStatus?: components["schemas"]["Domain.Contract.Enums.WorkflowStatusEnum"];
            isSuccess?: boolean;
        };
        "Application.AuthRequests.Commands.DeterminingSituationCommands.DeterminingSituationCommand": {
            jwt?: string | null;
            /** Format: int64 */
            authRequestId?: number;
            accountNumber?: string | null;
            hostResult?: string | null;
        };
        "Application.AuthRequests.Commands.DeterminingSituationCustomerNumberCommands.DeterminingSituationCustomerNumberCommand": {
            jwt?: string | null;
            /** Format: int64 */
            authRequestId?: number;
            custNO?: string | null;
            hostResult?: string | null;
        };
        "Application.AuthRequests.Commands.GnafAddressCommands.GnafAddressCommand": {
            id?: string | null;
            gnafAddress?: string | null;
            token?: string | null;
        };
        "Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationCommand": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            /** Format: int32 */
            rejectionReasonId?: number;
            description?: string | null;
            jwt?: string | null;
        };
        "Application.AuthRequests.Commands.RejectCardInformations.RejectCardInformationOutputDto": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            isSuccess?: boolean;
        };
        "Application.AuthRequests.Commands.RejectStuckRecords.RejectStuckRecordCommand": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            /** Format: int32 */
            rejectionReasonId?: number;
            description?: string | null;
            jwt?: string | null;
        };
        "Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingAccountStateCommand": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            jwt?: string | null;
        };
        "Application.AuthRequests.Commands.ResetStuckRecords.ResetStuckRecordInCreatingCustomerStateCommand": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            jwt?: string | null;
        };
        "Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardCommand": {
            authRequestId?: string | null;
            token?: string | null;
        };
        "Application.AuthRequests.Commands.UpdateGNAFCards.UpdateGNAFCardOutputDto": {
            address?: string | null;
        };
        "Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowCommand": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            workflowStatus?: components["schemas"]["Domain.Contract.Enums.WorkflowStatusEnum"];
            jwt?: string | null;
        };
        "Application.AuthRequests.Commands.UpdateWorkflow.UpdateWorkflowOutputDto": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            workflowStatus?: components["schemas"]["Domain.Contract.Enums.WorkflowStatusEnum"];
        };
        "Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationCommand": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            jwt?: string | null;
        };
        "Application.AuthRequests.Commands.VerifyCardInformations.VerifyCardInformationOutputDto": {
            /** Format: int64 */
            authRequestId?: number;
            /** Format: byte */
            rowVersion?: string | null;
            isSuccess?: boolean;
        };
        "Application.AuthRequests.Queries.GetAuthRequestById.GetAuthRequestByIdQuery": {
            /** Format: int64 */
            id?: number;
            jwt?: string | null;
        };
        "Application.AuthRequests.Queries.GetAuthRequestReport.GetAuthRequestReportQuery": {
            authRequestStatus?: boolean | null;
            nationalCode?: string | null;
            fromDate?: string | null;
            toDate?: string | null;
            jwt?: string | null;
            /** Format: int32 */
            pageNumber?: number;
            /** Format: int32 */
            pageSize?: number;
        };
        "Application.AuthRequests.Queries.GetAuthRequestUnsuccessfulReport.GetAuthRequestUnsuccessfulReportQuery": {
            nationalCode?: string | null;
            fromDate?: string | null;
            toDate?: string | null;
            jwt?: string | null;
            /** Format: int32 */
            pageNumber?: number;
            /** Format: int32 */
            pageSize?: number;
        };
        "Application.AuthRequests.Queries.GetAuthRequests.GetAuthRequestsQuery": {
            fromDate?: string | null;
            toDate?: string | null;
            nationalCode?: string | null;
            /** Format: int32 */
            pageNumber?: number;
            /** Format: int32 */
            pageSize?: number;
            jwt?: string | null;
            reportType?: components["schemas"]["Domain.Contract.Enums.ReportTypeStatus"];
            branchCode?: string | null;
            tellerNo?: string | null;
            /** Format: int32 */
            provinceId?: number | null;
        };
        "Application.AuthRequests.Queries.GetAuthRequestsAsExcel.GetAuthRequestsAsExcelQuery": {
            fromDate?: string | null;
            toDate?: string | null;
            nationalCode?: string | null;
            jwt?: string | null;
            reportType?: components["schemas"]["Domain.Contract.Enums.ReportTypeStatus"];
            branchCode?: string | null;
            tellerNo?: string | null;
            /** Format: int32 */
            provinceId?: number | null;
        };
        "Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQuery": {
            /** Format: int64 */
            authRequestId?: number;
            token?: string | null;
        };
        "Application.AuthRequests.Queries.GetCustomerAccounts.GetCustomerAccountRequestQueryOutputDto": {
            accountNumber?: string | null;
            rowVersion?: string | null;
        };
        "Application.AuthRequests.Queries.GetCustomerByNationalCode.GetAuthRequestByNationalCodeQuery": {
            nationalCode?: string | null;
            userId?: string | null;
        };
        "Application.AuthRequests.Queries.GetReportTypes.GetReportTypesOutputDto": {
            name?: string | null;
            /** Format: int32 */
            value?: number;
        };
        "Application.AuthRequests.Queries.GetReportTypes.GetReportTypesQuery": {
            token?: string | null;
        };
        "Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestCommand": {
            nationalCode?: string | null;
            mobile?: string | null;
            nationalCodeSerial?: string | null;
            birthDate?: string | null;
            requestTypeId?: string | null;
            accountTypeId?: string | null;
            oneTimeLinkCode?: string | null;
        };
        "Application.BancsLinks.Commands.AuthRequestCommands.AuthRequestOutputDto": {
            /** Format: int32 */
            otpTime?: number;
            organizationUnitName?: string | null;
        };
        "Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestCommand": {
            nationalCode?: string | null;
            mobile?: string | null;
            nationalCodeSerial?: string | null;
            birthDate?: string | null;
            /** Format: int32 */
            accountTypeId?: number;
            oneTimeLinkCode?: string | null;
            identityIssueDate?: string | null;
        };
        "Application.BancsLinks.Commands.AuthRequestCommands.V2.AuthRequestOutputDto": {
            /** Format: int32 */
            otpTime?: number;
            organizationUnitName?: string | null;
        };
        "Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycCommand": {
            token?: string | null;
        };
        "Application.BancsLinks.Commands.CustomerDidKycCommands.CustomerDidKycOutputDto": {
            isUpdated?: boolean;
        };
        "Application.BancsLinks.Commands.RequestCards.RequestCardCommand": {
            requestCard?: boolean;
            sameHomeAddressForCard?: boolean;
            /** Format: int32 */
            cityId?: number;
            cardAddress?: string | null;
            cardPostalCode?: string | null;
            token?: string | null;
        };
        "Application.BancsLinks.Commands.RequestCards.RequestCardOutputDto": {
            isSuccess?: boolean;
        };
        "Application.BancsLinks.Commands.RequestCards.V2.RequestCardCommand": {
            requestCard?: boolean;
            /** Format: int32 */
            cardPatternId?: number;
            sameHomeAddressForCard?: boolean;
            /** Format: int32 */
            cityId?: number;
            cardAddress?: string | null;
            cardPostalCode?: string | null;
            identifierValue?: string | null;
            token?: string | null;
        };
        "Application.BancsLinks.Commands.RequestCards.V2.RequestCardOutputDto": {
            isSuccess?: boolean;
        };
        "Application.BancsLinks.Commands.SaveAddressCommands.SaveAddressCommand": {
            provinceId?: string | null;
            cityId?: string | null;
            branchCode?: string | null;
            postalCode?: string | null;
            village?: string | null;
            mainStreet?: string | null;
            alley?: string | null;
            phone?: string | null;
            birthCertificatePlace?: string | null;
            jobId?: string | null;
            jobDetailId?: string | null;
            identityIssueDate?: string | null;
            token?: string | null;
        };
        "Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressCommand": {
            /** Format: int32 */
            provinceId?: number;
            /** Format: int32 */
            cityId?: number;
            branchCode?: string | null;
            postalCode?: string | null;
            village?: string | null;
            mainStreet?: string | null;
            alley?: string | null;
            phone?: string | null;
            /** Format: int32 */
            jobDetailId?: number;
            token?: string | null;
        };
        "Application.BancsLinks.Commands.SaveAddressCommands.V2.SaveAddressOutputDto": {
            isRequestCardPossible?: boolean;
        };
        "Application.BancsLinks.Commands.SaveNationalCodeImageCommands.SaveNationalCodeImageCommand": {
            binaries?: string | null;
            fileName?: string | null;
            mimeType?: string | null;
            token?: string | null;
        };
        "Application.BancsLinks.Commands.SaveObligationCommands.SaveObligationCommand": {
            token?: string | null;
        };
        "Application.BancsLinks.Commands.VerificationCommands.VerificationCommand": {
            nationalCode?: string | null;
            mobile?: string | null;
            verifyCode?: string | null;
        };
        "Application.BancsLinks.Commands.VerificationCommands.VerificationOutputDto": {
            token?: string | null;
        };
        "Application.BancsLinks.ObligationDto": {
            aggrementText?: string | null;
            isKYCNeeded?: boolean;
        };
        "Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressOutputDto": {
            homeAddress?: string | null;
        };
        "Application.BancsLinks.Queries.GetCustomerHomeAddresses.GetCustomerHomeAddressQuery": {
            token?: string | null;
        };
        "Application.BancsLinks.Queries.GetGNAFs.InquiryGNAFForCardQuery": {
            postalCode?: string | null;
            token?: string | null;
        };
        "Application.BancsLinks.Queries.GetObligation.GetObligationQuery": {
            token?: string | null;
        };
        "Application.BancsLinks.Queries.InquiryGNAFForCards.InquiryGNAFForCardOutputDto": {
            address?: string | null;
        };
        "Application.Branches.Queries.BranchesRelateToCityOutputDto": {
            code?: string | null;
            name?: string | null;
        };
        "Application.Branches.Queries.GetBranchesRelateToCityQuery": {
            /** Format: int32 */
            cityId?: number;
        };
        "Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameOutoutDto": {
            provinceName?: string | null;
            cityName?: string | null;
            branchName?: string | null;
            branchCode?: string | null;
            isCurrency?: boolean;
        };
        "Application.Branches.Queries.GetBranchesWithCityNames.GetBranchesWithCityNameQuery": {
            branchSearch?: string | null;
        };
        "Application.Cities.CityDto": {
            id?: string | null;
            title?: string | null;
        };
        "Application.Cities.Queries.GetCities.GetCitiesQuery": {
            /** Format: int32 */
            provinceId?: number | null;
        };
        "Application.JobDetails.JobDetailDto": {
            id?: string | null;
            title?: string | null;
            jobId?: string | null;
        };
        "Application.JobDetails.Queries.GetJobDetails.GetJobDetailsQuery": {
            jobId?: string | null;
            code?: string | null;
        };
        "Application.Jobs.JobDto": {
            id?: string | null;
            title?: string | null;
        };
        "Application.Jobs.Queries.GetJobs.GetJobsQuery": {
            code?: string | null;
        };
        "Application.KYCRequests.Commands.SubmitResult.SubmitResultCommand": {
            /** Format: uuid */
            orderId?: string;
            kycStatus?: components["schemas"]["Domain.Contract.Enums.FinalStatusEnum"];
            message?: string | null;
        };
        "Application.Medias.Queries.GetMedia.GetMediaQuery": {
            /** Format: uuid */
            orderId?: string;
        };
        "Application.OperatorActions.Commands.CreateOperatorAction.CreateOperatorActionCommand": {
            /** Format: int64 */
            id?: number;
            personalInformationValidation?: string | null;
            mediaValidation?: string | null;
            addressValidation?: string | null;
            description?: string | null;
            /** Format: int32 */
            rejectionReasonId?: number;
            jwt?: string | null;
            authRequestStatus?: boolean | null;
        };
        "Application.Provinces.ProvinceDto": {
            id?: string | null;
            title?: string | null;
        };
        "Application.Provinces.Queries.GetProvinces.GetProvincesQuery": Record<string, never>;
        "Application.RejectionReasons.Queries.RejectionReasonOutputDto": {
            /** Format: int32 */
            id?: number;
            reason?: string | null;
        };
        "Application.RejectionReasons.Queries.RejectionReasonQuery": {
            token?: string | null;
        };
        "Application.RequestTypes.Queries.GetRequestTypes.GetRequestTypesQuery": Record<string, never>;
        "Application.RequestTypes.RequestTypeDto": {
            id?: string | null;
            title?: string | null;
            agreementId?: string | null;
            agreementText?: string | null;
            hasChildren?: string | null;
        };
        "Application.RoleManagers.Commands.AssignPermission.AssignPermissionCommand": {
            /** Format: uuid */
            roleId?: string;
            permissions?: string[] | null;
        };
        "Application.RoleManagers.Commands.CreateRole.CreateRoleCommand": {
            roleName?: string | null;
        };
        "Application.RoleManagers.Commands.DeleteRole.DeleteRoleCommand": {
            /** Format: uuid */
            id?: string;
        };
        "Application.RoleManagers.Commands.EditRole.EditRoleCommand": {
            /** Format: uuid */
            id?: string;
            roleName?: string | null;
        };
        "Application.UserManagers.Commands.AssignRole.AssignRoleCommand": {
            /** Format: uuid */
            userId?: string;
            roles?: string[] | null;
        };
        "Application.UserManagers.Commands.CreateUser.CreateUserCommand": {
            userName?: string | null;
            password?: string | null;
            loginProvider?: components["schemas"]["Domain.Users.LoginProvider"];
        };
        "Application.UserManagers.Commands.DeleteUser.DeleteUserCommand": {
            /** Format: uuid */
            id?: string;
        };
        "Application.UserManagers.Commands.EditUser.EditUserCommand": {
            /** Format: uuid */
            id?: string;
            firstName?: string | null;
            lastName?: string | null;
            employeeNumber?: string | null;
        };
        "Application.UserManagers.Commands.LoginUser.LoginUserCommand": {
            userName?: string | null;
            password?: string | null;
        };
        "Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestListDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.AuthRequests.AuthRequestListDto"][] | null;
        };
        "Domain.Contract.Common.Result`1[[Domain.Common.PagedList`1[[Application.AuthRequests.AuthRequestReportDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], Domain.Contract, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.AuthRequests.AuthRequestReportDto"][] | null;
        };
        "Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.AccountTypes.AccountTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.AccountTypes.AccountTypeDto"][] | null;
        };
        "Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Cities.CityDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.Cities.CityDto"][] | null;
        };
        "Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.JobDetails.JobDetailDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.JobDetails.JobDetailDto"][] | null;
        };
        "Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Jobs.JobDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.Jobs.JobDto"][] | null;
        };
        "Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.Provinces.ProvinceDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.Provinces.ProvinceDto"][] | null;
        };
        "Domain.Contract.Common.Result`1[[System.Collections.Generic.List`1[[Application.RequestTypes.RequestTypeDto, Application, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], System.Private.CoreLib, Version=6.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]": {
            readonly ok?: boolean;
            /** Format: int32 */
            status?: number;
            detail?: string | null;
            /** Format: int32 */
            totalCount?: number;
            errors?: string[] | null;
            data?: components["schemas"]["Application.RequestTypes.RequestTypeDto"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        "Domain.Contract.Enums.FinalStatusEnum": 0 | 1 | 2 | 3 | 1000;
        /**
         * Format: int32
         * @enum {integer}
         */
        "Domain.Contract.Enums.MediaTypeEnum": 1 | 2 | 3 | 4 | 5;
        /**
         * Format: int32
         * @enum {integer}
         */
        "Domain.Contract.Enums.ReportTypeStatus": 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
        /**
         * Format: int32
         * @enum {integer}
         */
        "Domain.Contract.Enums.WorkflowStatusEnum": 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 21 | 30 | 31 | 61 | 71 | 72 | 73 | -10 | -4 | -3 | -2;
        /**
         * Format: int32
         * @enum {integer}
         */
        "Domain.Users.LoginProvider": 0 | 1;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
