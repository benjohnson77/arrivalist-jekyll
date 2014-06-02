set :public, Proc.new { File.join(root, "_site") }

post '/send' do 
  cache_control :no_cache   
  #if recaptcha_valid?
  #  session[:captcha] = true
    { :message => 'success' }.to_json
  #else
  #  session[:captcha] = false
  #  { :message => 'failure' }.to_json
  #end
end

post '/send_email' do 
    response.headers['Cache-Control'] = 'no-cache'
    require 'pony'
    require 'json'

    #if session[:captcha]
    #  session[:captcha] = false
    res = Pony.mail(
    :from => "#{params[:email]}",
    :to => 'cree@arrivalist.com, benjaminrjohnson99@gmail.com',
    :subject => "Message from your awesome website :)",
    :body => "#{params[:name]} from #{params[:company]} sent: #{params[:message]}",
    :via => :smtp,
    :via_options => {
      :address              => 'smtp.sendgrid.net',
      :port                 => '587',
      :enable_starttls_auto => true,
      :user_name            => ENV['SENDGRID_USERNAME'],
      :password             => ENV['SENDGRID_PASSWORD'],
      :authentication       => :plain,
      :domain               => 'heroku.com'
    })
      content_type :json
      if res
      { :message => 'success' }.to_json
      else
      { :message => 'failure' }.to_json
      end
    #else
    #  { :message => 'failure' }.to_json
    #end
end

get '/test' do 
  stuff = "sinatra is running #{Date.today.to_s}"
end  

before do  
    #response.headers['Cache-Control'] = 'public, max-age=36000'
end

not_found do  
    File.read('_site/404.html')
end

get '/*' do  
    file_name = "_site#{request.path_info}/index.html".gsub(%r{\/+},'/')
    if File.exists?(file_name)
    File.read(file_name)
    else
    raise Sinatra::NotFound
    end
end