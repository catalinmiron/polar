/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 *  Welcome to the **Polar API** for [polar.sh](https://polar.sh).  This specification contains both the definitions of the Polar HTTP API and the Webhook API.  #### Authentication  Use a [Personal Access Token](https://polar.sh/settings) and send it in the `Authorization` header on the format `Bearer [YOUR_TOKEN]`.  #### Feedback  If you have any feedback or comments, reach out in the [Polar API-issue](https://github.com/polarsource/polar/issues/834), or reach out on the Polar Discord server.  We\'d love to see what you\'ve built with the API and to get your thoughts on how we can make the API better!  #### Connecting  The Polar API is online at `https://api.polar.sh`. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  ListResourceSubscription,
  Platforms,
  Subscription,
  SubscriptionCreateEmail,
  SubscriptionTierType,
  SubscriptionsImported,
  SubscriptionsStatistics,
} from '../models/index';

export interface SubscriptionsApiCreateEmailSubscriptionRequest {
    subscriptionCreateEmail: SubscriptionCreateEmail;
    organizationName?: string;
    platform?: Platforms;
}

export interface SubscriptionsApiGetSubscriptionsStatisticsRequest {
    startDate: string;
    endDate: string;
    types?: Array<SubscriptionTierType>;
    subscriptionTierId?: string;
    organizationName?: string;
    platform?: Platforms;
}

export interface SubscriptionsApiSearchSubscriptionsRequest {
    type?: SubscriptionTierType;
    subscriptionTierId?: string;
    subscriberUserId?: string;
    active?: boolean;
    page?: number;
    limit?: number;
    sorting?: Array<string>;
    organizationName?: string;
    platform?: Platforms;
}

export interface SubscriptionsApiSubscriptionsExportRequest {
    organizationName?: string;
    platform?: Platforms;
}

export interface SubscriptionsApiSubscriptionsImportRequest {
    file: Blob;
    organizationName?: string;
    platform?: Platforms;
}

/**
 * 
 */
export class SubscriptionsApi extends runtime.BaseAPI {

    /**
     * Create Email Subscription
     */
    async createEmailSubscriptionRaw(requestParameters: SubscriptionsApiCreateEmailSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscription>> {
        if (requestParameters['subscriptionCreateEmail'] == null) {
            throw new runtime.RequiredError(
                'subscriptionCreateEmail',
                'Required parameter "subscriptionCreateEmail" was null or undefined when calling createEmailSubscription().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['organizationName'] != null) {
            queryParameters['organization_name'] = requestParameters['organizationName'];
        }

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/subscriptions/subscriptions/email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['subscriptionCreateEmail'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create Email Subscription
     */
    async createEmailSubscription(requestParameters: SubscriptionsApiCreateEmailSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscription> {
        const response = await this.createEmailSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Subscriptions Statistics
     */
    async getSubscriptionsStatisticsRaw(requestParameters: SubscriptionsApiGetSubscriptionsStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionsStatistics>> {
        if (requestParameters['startDate'] == null) {
            throw new runtime.RequiredError(
                'startDate',
                'Required parameter "startDate" was null or undefined when calling getSubscriptionsStatistics().'
            );
        }

        if (requestParameters['endDate'] == null) {
            throw new runtime.RequiredError(
                'endDate',
                'Required parameter "endDate" was null or undefined when calling getSubscriptionsStatistics().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['startDate'] != null) {
            queryParameters['start_date'] = requestParameters['startDate'];
        }

        if (requestParameters['endDate'] != null) {
            queryParameters['end_date'] = requestParameters['endDate'];
        }

        if (requestParameters['types'] != null) {
            queryParameters['types'] = requestParameters['types'];
        }

        if (requestParameters['subscriptionTierId'] != null) {
            queryParameters['subscription_tier_id'] = requestParameters['subscriptionTierId'];
        }

        if (requestParameters['organizationName'] != null) {
            queryParameters['organization_name'] = requestParameters['organizationName'];
        }

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/subscriptions/subscriptions/statistics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Subscriptions Statistics
     */
    async getSubscriptionsStatistics(requestParameters: SubscriptionsApiGetSubscriptionsStatisticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionsStatistics> {
        const response = await this.getSubscriptionsStatisticsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search Subscriptions
     */
    async searchSubscriptionsRaw(requestParameters: SubscriptionsApiSearchSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceSubscription>> {
        const queryParameters: any = {};

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['subscriptionTierId'] != null) {
            queryParameters['subscription_tier_id'] = requestParameters['subscriptionTierId'];
        }

        if (requestParameters['subscriberUserId'] != null) {
            queryParameters['subscriber_user_id'] = requestParameters['subscriberUserId'];
        }

        if (requestParameters['active'] != null) {
            queryParameters['active'] = requestParameters['active'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sorting'] != null) {
            queryParameters['sorting'] = requestParameters['sorting'];
        }

        if (requestParameters['organizationName'] != null) {
            queryParameters['organization_name'] = requestParameters['organizationName'];
        }

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/subscriptions/subscriptions/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Search Subscriptions
     */
    async searchSubscriptions(requestParameters: SubscriptionsApiSearchSubscriptionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceSubscription> {
        const response = await this.searchSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Subscriptions Export
     */
    async subscriptionsExportRaw(requestParameters: SubscriptionsApiSubscriptionsExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters['organizationName'] != null) {
            queryParameters['organization_name'] = requestParameters['organizationName'];
        }

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/subscriptions/subscriptions/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Subscriptions Export
     */
    async subscriptionsExport(requestParameters: SubscriptionsApiSubscriptionsExportRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.subscriptionsExportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Subscriptions Import
     */
    async subscriptionsImportRaw(requestParameters: SubscriptionsApiSubscriptionsImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionsImported>> {
        if (requestParameters['file'] == null) {
            throw new runtime.RequiredError(
                'file',
                'Required parameter "file" was null or undefined when calling subscriptionsImport().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['organizationName'] != null) {
            queryParameters['organization_name'] = requestParameters['organizationName'];
        }

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/api/v1/subscriptions/subscriptions/import`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Subscriptions Import
     */
    async subscriptionsImport(requestParameters: SubscriptionsApiSubscriptionsImportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionsImported> {
        const response = await this.subscriptionsImportRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
