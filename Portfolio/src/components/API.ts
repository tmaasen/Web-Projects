import { Project } from './Project';
const baseUrl = 'http://localhost:4000';
const url = `${baseUrl}/projects`;
//const url_fail = `${baseUrl}/fail`;

function translateStatusToErrorMessage(status: number) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the project(s).';
    case 500:
        return 'Internal server error (500).';
    default:
      return 'There was an error retrieving the project(s). Please try again.';
  }
}

function checkStatus(response: any) {
  if (response.ok) {
    delay(4000)
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
}

function parseJSON(response: Response) {
  return response.json();
}

function delay(ms: number) {
    return function(x: any): Promise<any> {
      return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
  }

  const featuredProjects = {
    get(page = 1, limit = 4) {
      return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError) => {
          console.log('log client error ' + error);
          throw new Error(
            'There was an error retrieving the featured projects. Please try again.'
          );
        });
      }
    }
  
  const projectAPI = {
    get(page = 1, limit = 20) {
      return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError) => {
          console.log('log client error ' + error);
          throw new Error(
            'There was an error retrieving the projects. Please try again.'
          );
        });
    },
    async put(project: Project) {
      try {
        const response = await fetch(`${url}/${project.id}`, {
          method: 'PUT',
          body: JSON.stringify(project),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const response_1 = await checkStatus(response);
        return parseJSON(response_1);
      }
      catch (error) {
        console.log('Log client error ' + error);
        throw new Error('There was an error updating the project. Please try again.');
      }
    },
    async find(id: number) {
      const response = await fetch(`${url}/${id}`);
      const response_1 = await checkStatus(response);
      return parseJSON(response_1);
    }
  };

  export { projectAPI, featuredProjects };
  
