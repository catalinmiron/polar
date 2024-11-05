/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api
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
  CustomField,
  CustomFieldCreate,
  CustomFieldSortProperty,
  CustomFieldTypeFilter,
  CustomFieldUpdate,
  HTTPValidationError,
  ListResource,
  OrganizationIDFilter,
  ResourceNotFound,
} from '../models/index';

export interface CustomFieldsApiCreateRequest {
    body: CustomFieldCreate;
}

export interface CustomFieldsApiDeleteRequest {
    id: string;
}

export interface CustomFieldsApiGetRequest {
    id: string;
}

export interface CustomFieldsApiListRequest {
    organizationId?: OrganizationIDFilter;
    query?: string;
    type?: CustomFieldTypeFilter;
    page?: number;
    limit?: number;
    sorting?: Array<CustomFieldSortProperty>;
}

export interface CustomFieldsApiUpdateRequest {
    id: string;
    body: CustomFieldUpdate;
}

/**
 * 
 */
export class CustomFieldsApi extends runtime.BaseAPI {

    /**
     * Create a custom field.
     * Create Custom Field
     */
    async createRaw(requestParameters: CustomFieldsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomField>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling create().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/custom-fields/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a custom field.
     * Create Custom Field
     */
    async create(requestParameters: CustomFieldsApiCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomField> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a custom field.
     * Delete Custom Field
     */
    async deleteRaw(requestParameters: CustomFieldsApiDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling delete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/custom-fields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a custom field.
     * Delete Custom Field
     */
    async delete(requestParameters: CustomFieldsApiDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteRaw(requestParameters, initOverrides);
    }

    /**
     * Get a custom field by ID.
     * Get Custom Field
     */
    async getRaw(requestParameters: CustomFieldsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomField>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/custom-fields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a custom field by ID.
     * Get Custom Field
     */
    async get(requestParameters: CustomFieldsApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomField> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List custom fields.
     * List Custom Fields
     */
    async listRaw(requestParameters: CustomFieldsApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResource>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/custom-fields/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List custom fields.
     * List Custom Fields
     */
    async list(requestParameters: CustomFieldsApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResource> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a custom field.
     * Update Custom Field
     */
    async updateRaw(requestParameters: CustomFieldsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomField>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling update().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling update().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("pat", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/custom-fields/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a custom field.
     * Update Custom Field
     */
    async update(requestParameters: CustomFieldsApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomField> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}