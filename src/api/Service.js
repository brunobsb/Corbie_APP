import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    });

    this.api.interceptors.request.use(async config => {
      if (config.url.includes("public")) return config;

      const tokenInfo = JSON.parse(localStorage.getItem("logged-user-info"));

      if (!tokenInfo) {
        window.location = "/login";

        return;
      }

      const { type, token, refresh_token } = tokenInfo;
      try {
        await this.api.get("/api/private/verify-token", {
          headers: { Authorization: `${type} ${token}` }
        });

        config.headers.Authorization = `${type} ${token}`;
        return config;
      } catch (error) {
        const { message } = error.response.data;
        const { status } = error.response;

        if (
          status === 401 &&
          (message === "jwt expired" || message === "Token not found")
        ) {
          try {
            const { data } = await this.api.get("/api/private/refresh-token", {
              headers: { Authorization: `${type} ${refresh_token}` }
            });

            localStorage.setItem("logged-user-info", JSON.stringify(data));

            config.headers.Authorization = `${data.type} ${data.token}`;

            return config;
          } catch (error) {
            localStorage.removeItem("logged-user-info");

            window.location = "/login";

            return;
          }
        }
      }
      return config;
    });
  }

  //User
  subscribeUser = async values => {
    const { data } = await this.api.post("/api/public/auth/signup", values);

    return data || data.message;
  };

  loginUser = async values => {
    const { data } = await this.api.post("/api/public/auth/login", values);

    return data;
  };

  getUserInfo = async () => {
    const { data } = await this.api.get("/api/private/user");

    return data.user || {};
  };

  updateUserInfo = async values => {
    const { data } = await this.api.put("/api/private/user", values);

    return data || data.message;
  };

  deleteUser = async () => {
    const { data } = await this.api.delete("/api/private/user");

    return data.message || {};
  };

  //Project
  listAllProjects = async () => {
    const { data } = await this.api.get("/api/private/projects");

    return data.projects || {};
  };

  getProjectInfo = async id => {
    const { data } = await this.api.get(`/api/private/project/${id}`);

    return data.project || {};
  };

  createProject = async values => {
    const { data } = await this.api.post("/api/private/project", values);

    return data.project || {};
  };

  updateProject = async (id, values) => {
    const { data } = await this.api.put(`/api/private/project/${id}`, values);

    return data.project || {};
  };

  deleteProject = async id => {
    const { data } = await this.api.delete(`/api/private/project/${id}`);

    return data.message || {};
  };

  //Tasks
  listAllTasksFromProject = async id => {
    const { data } = await this.api.get(`/api/private/tasks/${id}`);

    return data.tasks || {};
  };

  getTaskInfo = async id => {
    const { data } = await this.api.get(`/api/private/task/${id}`);

    return data.task || {};
  };

  createTask = async (id, values) => {
    const { data } = await this.api.post(`/api/private/task/${id}`, values);

    return data.task || {};
  };

  updateTask = async (id, values) => {
    const { data } = await this.api.put(`/api/private/task/${id}`, values);

    return data.task || {};
  };

  deleteTask = async id => {
    const { data } = await this.api.delete(`/api/private/task/${id}`);

    return data.message || {};
  };
}

export default new ApiService();
