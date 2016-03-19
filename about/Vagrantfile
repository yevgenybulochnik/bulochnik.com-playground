# -*- mode: ruby -*-
# vi: set ft=ruby :

machine = [
  { hostname:  "vm.bulochnik.com",
    box:       "ubuntu/trusty64",
    config:    "vm_config.sh",
    ip:        "172.69.69.69",
    synchost:  ".",
    syncguest: "/bulochnik",
  }
]

Vagrant.configure(2) do |config|
  if Vagrant.has_plugin?("vagrant-hostmanager")
    config.hostmanager.enabled = true
  end
  nodes.each do |node|
    config.vm.define node[:hostname] do |nodeconfig|
      nodeconfig.vm.provision :shell, path: node[:config]
      nodeconfig.vm.box = node[:box]
      nodeconfig.vm.hostname = node[:hostname]
      nodeconfig.vm.network :private_network, ip: node[:ip]
      nodeconfig.vm.synced_folder ".", "/vagrant", disabled: true
      nodeconfig.vm.synced_folder node[:synchost], node[:syncguest]

      nodeconfig.vm.provider :virtualbox do |v|
        v.name = node[:hostname]
        v.memory = 1024
      end
    end
  end
end
