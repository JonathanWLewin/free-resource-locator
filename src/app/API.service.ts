/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateResource: OnCreateResourceSubscription;
  onUpdateResource: OnUpdateResourceSubscription;
  onDeleteResource: OnDeleteResourceSubscription;
  onCreateProduct: OnCreateProductSubscription;
  onUpdateProduct: OnUpdateProductSubscription;
  onDeleteProduct: OnDeleteProductSubscription;
};

export type CreateResourceInput = {
  id?: string | null;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
};

export type ModelResourceConditionInput = {
  owner?: ModelStringInput | null;
  user?: ModelStringInput | null;
  product?: ModelStringInput | null;
  resource_link?: ModelStringInput | null;
  average_rating?: ModelFloatInput | null;
  rating_count?: ModelFloatInput | null;
  and?: Array<ModelResourceConditionInput | null> | null;
  or?: Array<ModelResourceConditionInput | null> | null;
  not?: ModelResourceConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Resource = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateResourceInput = {
  id: string;
  owner?: string | null;
  user?: string | null;
  product?: string | null;
  resource_link?: string | null;
  average_rating?: number | null;
  rating_count?: number | null;
};

export type DeleteResourceInput = {
  id: string;
};

export type CreateProductInput = {
  id?: string | null;
  name: string;
  tags?: Array<string | null> | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type Product = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  tags?: Array<string | null> | null;
};

export type DeleteProductInput = {
  id: string;
};

export type ModelResourceFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  user?: ModelStringInput | null;
  product?: ModelStringInput | null;
  resource_link?: ModelStringInput | null;
  average_rating?: ModelFloatInput | null;
  rating_count?: ModelFloatInput | null;
  and?: Array<ModelResourceFilterInput | null> | null;
  or?: Array<ModelResourceFilterInput | null> | null;
  not?: ModelResourceFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelResourceConnection = {
  __typename: "ModelResourceConnection";
  items: Array<Resource | null>;
  nextToken?: string | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection";
  items: Array<Product | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionResourceFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  owner?: ModelSubscriptionStringInput | null;
  user?: ModelSubscriptionStringInput | null;
  product?: ModelSubscriptionStringInput | null;
  resource_link?: ModelSubscriptionStringInput | null;
  average_rating?: ModelSubscriptionFloatInput | null;
  rating_count?: ModelSubscriptionFloatInput | null;
  and?: Array<ModelSubscriptionResourceFilterInput | null> | null;
  or?: Array<ModelSubscriptionResourceFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  tags?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProductFilterInput | null> | null;
  or?: Array<ModelSubscriptionProductFilterInput | null> | null;
};

export type CreateResourceMutation = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateResourceMutation = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteResourceMutation = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type GetResourceQuery = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type ListResourcesQuery = {
  __typename: "ModelResourceConnection";
  items: Array<{
    __typename: "Resource";
    id: string;
    owner: string;
    user: string;
    product: string;
    resource_link: string;
    average_rating: number;
    rating_count: number;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    tags?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateResourceSubscription = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateResourceSubscription = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteResourceSubscription = {
  __typename: "Resource";
  id: string;
  owner: string;
  user: string;
  product: string;
  resource_link: string;
  average_rating: number;
  rating_count: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateResource(
    input: CreateResourceInput,
    condition?: ModelResourceConditionInput
  ): Promise<CreateResourceMutation> {
    const statement = `mutation CreateResource($input: CreateResourceInput!, $condition: ModelResourceConditionInput) {
        createResource(input: $input, condition: $condition) {
          __typename
          id
          owner
          user
          product
          resource_link
          average_rating
          rating_count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateResourceMutation>response.data.createResource;
  }
  async UpdateResource(
    input: UpdateResourceInput,
    condition?: ModelResourceConditionInput
  ): Promise<UpdateResourceMutation> {
    const statement = `mutation UpdateResource($input: UpdateResourceInput!, $condition: ModelResourceConditionInput) {
        updateResource(input: $input, condition: $condition) {
          __typename
          id
          owner
          user
          product
          resource_link
          average_rating
          rating_count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateResourceMutation>response.data.updateResource;
  }
  async DeleteResource(
    input: DeleteResourceInput,
    condition?: ModelResourceConditionInput
  ): Promise<DeleteResourceMutation> {
    const statement = `mutation DeleteResource($input: DeleteResourceInput!, $condition: ModelResourceConditionInput) {
        deleteResource(input: $input, condition: $condition) {
          __typename
          id
          owner
          user
          product
          resource_link
          average_rating
          rating_count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteResourceMutation>response.data.deleteResource;
  }
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async GetResource(id: string): Promise<GetResourceQuery> {
    const statement = `query GetResource($id: ID!) {
        getResource(id: $id) {
          __typename
          id
          owner
          user
          product
          resource_link
          average_rating
          rating_count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetResourceQuery>response.data.getResource;
  }
  async ListResources(
    filter?: ModelResourceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListResourcesQuery> {
    const statement = `query ListResources($filter: ModelResourceFilterInput, $limit: Int, $nextToken: String) {
        listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            user
            product
            resource_link
            average_rating
            rating_count
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListResourcesQuery>response.data.listResources;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            tags
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  OnCreateResourceListener(
    filter?: ModelSubscriptionResourceFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateResource">>
  > {
    const statement = `subscription OnCreateResource($filter: ModelSubscriptionResourceFilterInput) {
        onCreateResource(filter: $filter) {
          __typename
          id
          owner
          user
          product
          resource_link
          average_rating
          rating_count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateResource">>
    >;
  }

  OnUpdateResourceListener(
    filter?: ModelSubscriptionResourceFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateResource">>
  > {
    const statement = `subscription OnUpdateResource($filter: ModelSubscriptionResourceFilterInput) {
        onUpdateResource(filter: $filter) {
          __typename
          id
          owner
          user
          product
          resource_link
          average_rating
          rating_count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateResource">>
    >;
  }

  OnDeleteResourceListener(
    filter?: ModelSubscriptionResourceFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteResource">>
  > {
    const statement = `subscription OnDeleteResource($filter: ModelSubscriptionResourceFilterInput) {
        onDeleteResource(filter: $filter) {
          __typename
          id
          owner
          user
          product
          resource_link
          average_rating
          rating_count
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteResource">>
    >;
  }

  OnCreateProductListener(
    filter?: ModelSubscriptionProductFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
  > {
    const statement = `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
        onCreateProduct(filter: $filter) {
          __typename
          id
          name
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
    >;
  }

  OnUpdateProductListener(
    filter?: ModelSubscriptionProductFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
  > {
    const statement = `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
        onUpdateProduct(filter: $filter) {
          __typename
          id
          name
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
    >;
  }

  OnDeleteProductListener(
    filter?: ModelSubscriptionProductFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
  > {
    const statement = `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
        onDeleteProduct(filter: $filter) {
          __typename
          id
          name
          tags
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
    >;
  }
}
