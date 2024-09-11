/*
Copyright 2024 Julio Fernandez

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
export interface AccessKey {
    id: string;
    type: string;
    resource: string;
}

/**
 * @interface PodAccess contains data related on oaccessing one pod for doing someting
 * @field name, the name of the pod (including nothing extra)
 * @field namespace, the namespace of the pod
 * @field accessKey, for compatibility, the accessKey to view pod logs
 * @field viewAccessKey, the accessKey to view pod logs
 * @field restartAccessKey, the accessKey to restart pods
 */
export interface PodData {
    name: string;
    namespace: string;
    accessKey: AccessKey;
    viewAccessKey: AccessKey;
    restartAccessKey: AccessKey;
}

/**
 * @interface ClusterPods contains data about a cluster and all the popds found in the cluster that match required access
 * @field name is the name of the cluster
 * @field url is the kwirth url (we will use it for asking for access keys)
 * @field title is a short description of the cluster
 * @field data is an array of 'PodAccess'
 */
export interface ClusterPods {
    name: string;
    url: string;
    title?: string;
    data: PodData[];
}

export function accessKeySerialize(accessKey:AccessKey):string {
    if (!accessKey) return '';
    return `${accessKey.id}|${accessKey.type}|${accessKey.resource}`;
}
