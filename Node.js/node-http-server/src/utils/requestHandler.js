import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { getRequestData } from './getRequestData.js';
import { createReadStream, readFileSync, writeFileSync } from 'fs';


import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const usersDataPath = resolve(__dirname, 'C:/Users/MSI-PC/OneDrive/Desktop/node-http-server/data/users.json');
let usersData = JSON.parse(readFileSync(usersDataPath, 'utf8'));

const postsDataPath = resolve(__dirname, 'C:/Users/MSI-PC/OneDrive/Desktop/node-http-server/data/posts.json');
let postsData = JSON.parse(readFileSync(postsDataPath, 'utf8'));

/**
 * This function manages an HTTP request.
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */
export const requestHandler = async (request, response) => {
  const { headers, method, url } = request;
  const { address, port } = request.socket.server.address();
  const fullEndpoint = `http://${address}:${port}${url}`;

  console.log(url);
  const path = url.split('/')[1];

  switch (path) {
    case 'users': {
      const id = url.split('/')[2];


      // CRUD OPERATIONS 
     
      switch (method) {

        // ADDING 

        case 'POST': {
          const body = await getRequestData(request);
          const newUser = JSON.parse(body);
          usersData.push(newUser);
          writeFileSync(usersDataPath, JSON.stringify(usersData), 'utf8');
    
          response.setHeader('Content-Type', 'application/json');
          response.statusCode = StatusCodes.CREATED;
          response.write(JSON.stringify(newUser));
          break;
        }
    
        // GET : SHOWING DATA BY ID OR ALL DATA 
        case 'GET': {
          if (id) {
            const user = usersData.find((user) => user.id.toString() === id);
            if (user) {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(user));
            } else {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: `User with ID ${id} not found`,
                })
              );
            }
          } else {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.OK;
            response.write(JSON.stringify(usersData));
          }
          break;
        }
    
        // MODIFYING AN EXIST DATA BY THE ID
        case 'PATCH': {
          if (id) {
            const foundUserIndex = usersData.findIndex((user) => user.id.toString() === id.toString());
            if (foundUserIndex !== -1) {
              try {
                const body = await getRequestData(request);
                const newProperties = JSON.parse(body);
                usersData[foundUserIndex] = { ...usersData[foundUserIndex], ...newProperties };
                writeFileSync(usersDataPath, JSON.stringify(usersData), 'utf8');
    
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = StatusCodes.OK;
                response.write(JSON.stringify(usersData[foundUserIndex]));
              } catch (error) {
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
                response.write(
                  JSON.stringify({
                    error: ReasonPhrases.INTERNAL_SERVER_ERROR,
                    message: 'An error occurred while updating the user',
                  })
                );
              }
            } else {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: `User with ID ${id} not found`,
                })
              );
            }
          } else {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.BAD_REQUEST;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.BAD_REQUEST,
                message: 'User ID not provided',
              })
            );
          }
          break;
        }

        // REMOVING AN EXIST DATA BY ID
    
        case 'DELETE': {
          if (id) {
            const foundUserIndex = usersData.findIndex((user) => user.id.toString() === id.toString());
            if (foundUserIndex !== -1) {
              const deletedUser = usersData.splice(foundUserIndex, 1);
              writeFileSync(usersDataPath, JSON.stringify(usersData), 'utf8');
    
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.OK;
              response.write(
                JSON.stringify({
                  message: `User with ID ${id} has been deleted successfully`,
                })
              );
            } else {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: `User with ID ${id} not found`,
                })
              );
            }
          } else {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.BAD_REQUEST;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.BAD_REQUEST,
                message: 'User ID not provided',
              })
            );
          }
          break;
        }
    
        default: {
          response.setHeader('Content-Type', 'application/json');
          response.statusCode = StatusCodes.NOT_FOUND;
          response.write(
            JSON.stringify({
              error: ReasonPhrases.NOT_FOUND,
              message: 'Endpoint not found',
            })
          );
          break;
        }
      }
      break;
    }
    

    case 'posts': {
      const postId = url.split('/')[2];
    
      // CRUD OPERATIONS FOR POSTS
      switch (method) {

        // ADDING

        case 'POST': {
          try {
            const body = await getRequestData(request);
            const newPost = JSON.parse(body);
            const newPostId = postsData.length + 1;
            newPost.post_id = newPostId;
            postsData.push(newPost);
            writeFileSync(postsDataPath, JSON.stringify(postsData), 'utf8');
    
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.CREATED;
            response.write(JSON.stringify(newPost));
          } catch (error) {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.INTERNAL_SERVER_ERROR,
                message: 'An error occurred while creating the post',
              })
            );
          }
          break;
        }
        
        // GET : SHOWING DATA BY ID OR ALL DATA 
    
        case 'GET': {
          if (postId !== undefined) {
            const post = postsData.find((post) => post.post_id && post.post_id.toString() === postId.toString());
            if (post) {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.OK;
              response.write(JSON.stringify(post));
            } else {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: `Post with ID ${postId} not found`,
                })
              );
            }
          } else {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.OK;
            response.write(JSON.stringify(postsData));
          }
          break;
        }
        // MODIFYING AN EXIST DATA BY THE ID
    
        case 'PATCH': {
          if (postId) {
            const postIndex = postsData.findIndex((post) => post.post_id && post.post_id.toString() === postId.toString());
            if (postIndex !== -1) {
              try {
                const body = await getRequestData(request);
                const updatedPost = JSON.parse(body);
                postsData[postIndex] = { ...postsData[postIndex], ...updatedPost };
                writeFileSync(postsDataPath, JSON.stringify(postsData), 'utf8');
    
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = StatusCodes.OK;
                response.write(JSON.stringify(postsData[postIndex]));
              } catch (error) {
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
                response.write(
                  JSON.stringify({
                    error: ReasonPhrases.INTERNAL_SERVER_ERROR,
                    message: 'An error occurred while updating the post',
                  })
                );
              }
            } else {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.NOT_FOUND;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.NOT_FOUND,
                  message: `Post with ID ${postId} not found`,
                })
              );
            }
          } else {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.METHOD_NOT_ALLOWED;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.METHOD_NOT_ALLOWED,
                message: `Method ${method} is not allowed on ${url}`,
              })
            );
          }
          break;
        }
    // REMOVING AN EXIST DATA BY THE ID
        case 'DELETE': {
          if (postId) {
            try {
              const postIndex = postsData.findIndex((post) => post.post_id && post.post_id.toString() === postId);
              if (postIndex !== -1) {
                const deletedPost = postsData.splice(postIndex, 1);
                writeFileSync(postsDataPath, JSON.stringify(postsData), 'utf8');
    
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = StatusCodes.OK;
                response.write(
                  JSON.stringify({
                    message: `Post with ID ${postId} has been deleted successfully`,
                  })
                );
              } else {
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = StatusCodes.NOT_FOUND;
                response.write(
                  JSON.stringify({
                    error: ReasonPhrases.NOT_FOUND,
                    message: `Post with ID ${postId} not found`,
                  })
                );
              }
            } catch (error) {
              response.setHeader('Content-Type', 'application/json');
              response.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
              response.write(
                JSON.stringify({
                  error: ReasonPhrases.INTERNAL_SERVER_ERROR,
                  message: 'An error occurred while deleting the post',
                })
              );
            }
          } else {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = StatusCodes.BAD_REQUEST;
            response.write(
              JSON.stringify({
                error: ReasonPhrases.BAD_REQUEST,
                message: 'Post ID not provided',
              })
            );
          }
          break;
        }
    
        default: {
          response.setHeader('Content-Type', 'application/json');
          response.statusCode = StatusCodes.METHOD_NOT_ALLOWED;
          response.write(
            JSON.stringify({
              error: ReasonPhrases.METHOD_NOT_ALLOWED,
              message: `Method ${method} is not allowed on ${url}`,
            })
          );
          break;
        }
      }
    
      break;
    }
    
         
          
       
       
           
       
    case '': {
      const htmlPath = resolve(__dirname, 'C:/Users/MSI-PC/OneDrive/Desktop/node-http-server/index.html');
      response.setHeader('Content-Type', 'text/html');
      response.statusCode = StatusCodes.OK;
      createReadStream(htmlPath).pipe(response);
      break;
    }
    
    default: {
      response.setHeader('Content-Type', 'text/plain');
      response.statusCode = StatusCodes.NOT_FOUND;
      response.write('404 Not Found');
      break;
    }   
    }
    
  

  response.end();
};
          










