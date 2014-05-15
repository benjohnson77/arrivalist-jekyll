require 'rubygems'  
require 'sinatra'  
require 'rack/recaptcha'

use Rack::Recaptcha, :public_key => 'MyPublicKey', :private_key => 'TheS3cr3tS3cr3tKey'  
helpers Rack::Recaptcha::Helpers  
enable :sessions

require './application'  
run Sinatra::Application