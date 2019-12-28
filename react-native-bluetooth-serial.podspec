require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-bluetooth-serial"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-bluetooth-serial
                   DESC
  s.homepage     = package["homepage"]
  s.authors      = package["author"]
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/Shipmetrics/react-native-bluetooth-serial.git", :tag => "#{s.version}" }

  s.dependency "React"

  s.source_files = "ios/**/*.{h,m,swift}"
end
