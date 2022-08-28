import os
from fabric.api import local, run, cd, env, sudo, settings, lcd,prompt
from fabric.colors import red
from fabric.decorators import hosts

env.hosts = ['release@tuteria.com']

password = os.getenv('PRODUCTION_PASSWORD', '')

@hosts("sama@release.tuteria.com")
def deploy_dev(build_no="latest"):
    code_dir = "/home/sama/tuteria-projects/tuteria-deploy"
    with settings(user="sama", password=password):
        with cd(code_dir):
            run("pwd")
            print(build_no)
            run("DEV_DEPLOY_VERSION={} docker-compose pull storybook-mobile".format(build_no))
            run("DEV_DEPLOY_VERSION={} docker-compose up -d storybook-mobile".format(build_no))
            run('docker image prune -f')
            run('docker container prune -f')

@hosts("sama@release.tuteria.com")
def deploy_staging(build_no=9):
    pass


def deploy_production(build_no="latest"):
    pass