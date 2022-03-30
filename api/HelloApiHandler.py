from flask_restful import Api, Resource, reqparse

class HelloApiHandler(Resource):

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument('type', type=str)
    parser.add_argument('message', type=str)

    args = parser.parse_args()

    request_type = args['type']
    request_json = args['message']
    
    ret_status = request_type
    ret_msg = request_json

    
    final_ret = {
      "status": "Success", 
      "message": ret_msg
    }

    return final_ret