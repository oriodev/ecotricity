export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface FullResource {
    mimetype: string | null;
    cache_url: string | null;
    name: string;
    hash: string;
    description: string;
    metadata_modified: string;
    cache_last_updated: string | null;
    url: string;
    datastore_active: boolean;
    format: string;
    package_id: string;
    created: string;
    state: string;
    mimetype_inner: string | null;
    last_modified: string;
    position: number;
    revision_id: string;
    url_type: string;
    id: string;
    resource_type: string | null;
    size: number | null;
}