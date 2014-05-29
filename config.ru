require "rubygems"
require "bundler"
Bundler.require

require 'rack-livereload'
use Rack::LiveReload

require './application'  
run Sinatra::Application


